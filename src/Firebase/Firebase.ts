import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { IResume } from "../Shared/Interfaces/Resume.interface";
import { ITemplate } from "../Shared/Interfaces/Template.interface";
import { IUser } from "../Shared/Interfaces/User.interface";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

class Firebase {
  auth: firebase.default.auth.Auth;
  db: firebase.default.firestore.Firestore;
  storage: firebase.default.storage.Storage;

  constructor() {
    // Check to see if more instances have been run 
    if (app.apps.length <= 0) {
      app.initializeApp(config);
    }

    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }

  // Auth API
  signUp = async (formUser: IUser, password: string) => {
    const createdUser = await this.auth.createUserWithEmailAndPassword(
      formUser.email,
      password
    );

    await this.db
      .collection("users")
      .doc(createdUser.user?.uid)
      .set({ ...formUser, userId: createdUser.user?.uid });

    return await this.getUser(createdUser.user?.uid);
  };

  signIn = async (email: string, password: string) => {
    const credentials = await this.auth.signInWithEmailAndPassword(
      email,
      password
    );
    return await this.getUser(credentials.user?.uid);
  };

  isAutheticated = () => this.auth.currentUser !== null;

  signOut = () => this.auth.signOut();

  sendPasswordResetEmail = (email: string) => this.auth.sendPasswordResetEmail(email);

  updatePassword = (password: string) =>
    this.auth.currentUser?.updatePassword(password);

  getTokenId = async () => await this.auth.currentUser?.getIdToken(false);

  uploadFile = async (file: File, path: string) => {
    const metadata = {
      contentType: file.type,
    };

    const storageRef = this.storage.ref(`images/${path}`);
    await storageRef.put(file, metadata);
    return await storageRef.getDownloadURL();
  };

  getUser = async (userId?: string) => {
    const user = await this.db.collection("users").doc(userId).get();
    return user.data();
  };

  updateUser = async (userId: string, user: IUser) => {
    this.db.collection("users").doc(userId).set(user);
    return await this.getUser(userId);
  };

  getTemplates = async () => {
    const templates = await this.db.collection("templates").get();
    return Promise.all(
      templates.docs.map(async (x) => {
        const data = x.data();
        const ref = this.storage.refFromURL(data.path);
        return {
          ...data,
          path: await ref.getDownloadURL(),
        } as ITemplate;
      })
    );
  };

  getResume = async () => {
    const data = await this.db.collection("resumes")
      .where("userId", "==", this.auth.currentUser?.uid)
      .orderBy("updatedAt", "desc")
      .limit(1)
      .get();

    if (data.empty) return null;

    return data.docs[0].data() as IResume;
  }

  saveResume = async (resume: IResume, isNew: boolean) => {
    const optionalFields = isNew ? { createdAt: app.firestore.Timestamp.now() } : {};
    await this.db
      .collection("resumes")
      .doc(resume.id)
      .set({
        ...resume,
        userId: this.auth.currentUser?.uid || null,
        ...optionalFields,
        updatedAt: app.firestore.Timestamp.now()
      }, { merge: true });

    return (await this.db.collection("resumes").doc(resume.id).get()).data() as IResume;
  };

  isValidSignUpKey = async (key: string) => {
    const data = await this.db.collection("keys").doc(key).get();
    debugger;
    return data.exists;
  }
}

export default Firebase;
