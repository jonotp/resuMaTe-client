import { ICertificate } from "./Certificate.interface";
import { IEducation } from "./Education.interface";
import { IExperience } from "./Experience.interface";

export interface IResume {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  website?: string;
  position?: string;
  careerObjective?: string;
  userId?: string;
  education: IEducation[];
  experience: IExperience[];
  certificates: ICertificate[];
  skills: string[];
  referenceType?: number;
  references?: [];
}
