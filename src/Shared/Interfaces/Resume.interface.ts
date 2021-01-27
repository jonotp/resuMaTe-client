export interface IResume {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  website?: string;
  positionTitle: string;
  address: string;
  careerObjective?: string;
  education: IEducation[];
  experience: IExperience[];
  certificates: ICertificate[];
  skills: string[];
  referenceType?: number;
  references?: [];
  userId: string;
}

export interface IPersonal {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  website?: string;
  positionTitle: string;
  address: string;
  careerObjective?: string;
}

export interface IEducation {
  id: string;
  schoolName: string;
  location: string;
  program: string;
  mark: string;
  hasGraduated: boolean;
  startDate: string | null;
  completionDate: string | null;
}

export const DefaultEducation: IEducation = {
  id: "",
  schoolName: "",
  location: "",
  program: "",
  mark: "",
  startDate: null,
  completionDate: null,
  hasGraduated: false,
}

export interface IExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  isCurrentJob: boolean;
  startDate: string | null;
  endDate: string | null;
  responsibilities: string;
}

export const DefaultExperience: IExperience = {
  id: "",
  title: "",
  company: "",
  location: "",
  isCurrentJob: false,
  startDate: null,
  endDate: null,
  responsibilities: "",
}

export interface ICertificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string | null;
  hasExpiryDate: boolean;
  expiryDate: string | null;
}

export const DefaultCertificate: ICertificate = {
  id: "",
  name: "",
  issuer: "",
  issueDate: null,
  hasExpiryDate: false,
  expiryDate: null,
}
