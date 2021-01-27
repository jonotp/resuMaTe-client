import { ICertificate } from "./Certificate.interface";
import { IEducation } from "./Education.interface";
import { IExperience } from "./Experience.interface";
import { ISkill } from "./Skill.interface";
import { ID } from "./ID.interface";

export interface IResume extends ID {
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
  skills: ISkill[];
  referenceType?: number;
  references?: [];
}
