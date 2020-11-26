import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

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
  auth = null;
  db = null;
  storage = null;

  constructor() {
    if (app.apps.length <= 0) {
      app.initializeApp(config);
    }

    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }

  // Auth API
  signUp = async (formUser, password) => {
    const createdUser = await this.auth.createUserWithEmailAndPassword(
      formUser.email,
      password
    );

    await this.db
      .collection("users")
      .doc(createdUser.user?.uid)
      .set(storedUser);

    return await this.getUser(createdUser.user?.uid);
  };

  signIn = async (email, password) => {
    const credentials = await this.auth.signInWithEmailAndPassword(
      email,
      password
    );
    return await this.getUser(credentials.user?.uid);
  };

  signOut = () => this.auth.signOut();

  sendPasswordResetEmail = (email) => this.auth.sendPasswordResetEmail(email);

  updatePassword = (password) =>
    this.auth.currentUser?.updatePassword(password);

  getTokenId = async () => await this.auth.currentUser?.getIdToken(false);

  uploadFile = async (file, path) => {
    const metadata = {
      contentType: file.type,
    };

    const storageRef = this.storage.ref(`images/${path}`);
    await storageRef.put(file, metadata);
    return await storageRef.getDownloadURL();
  };

  getUser = async (userId) => {
    const user = await this.db.collection("users").doc(userId).get();
    return user.data();
  };

  updateUser = async (userId, user) => {
    this.db.collection("users").doc(userId).set(user);
    return await this.getUser(userId);
  };
}

export default Firebase;
