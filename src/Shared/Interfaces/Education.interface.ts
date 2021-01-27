import { ID } from "./ID.interface";

export interface IEducation extends ID{
  id: string;
  school: string;
  location?: string;
  program: string;
  hasGraduated: boolean;
  startDate: string | null;
  completionDate: string | null;
  mark?: string;
}

export const DefaultEducation: IEducation = {
  id: "",
  school: "",
  location: "",
  program: "",
  mark: "",
  startDate: null,
  completionDate: null,
  hasGraduated: false,
}
