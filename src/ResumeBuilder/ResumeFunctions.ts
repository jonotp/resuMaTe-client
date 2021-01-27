import { ICertificate } from "../Shared/Interfaces/Certificate.interface";
import { IEducation } from "../Shared/Interfaces/Education.interface";
import { IExperience } from "../Shared/Interfaces/Experience.interface";
import { IPersonal } from "../Shared/Interfaces/Personal.interface";
import { IResume } from "../Shared/Interfaces/Resume.interface";
import { ISkill } from "../Shared/Interfaces/Skill.interface";

export const getPersonalDetails = ({
  firstName,
  lastName,
  email,
  phone,
  website,
  address,
  position,
  careerObjective,
}: IResume): IPersonal => {
  return {
    firstName,
    lastName,
    email,
    phone,
    website,
    address,
    position,
    careerObjective,
  };
};

export const getResumeId = (data: IResume): string => {
  return data.id;
}

export const getReferenceDetails = (data: IResume) => {
  return { referenceType: data.referenceType, references: data.references };
};

export const getExperience = (data: IResume): IExperience[] => {
  return data.experience;
};

export const getEducation = (data: IResume): IEducation[] => {
  return data.education;
};

export const getCertificates = (data: IResume): ICertificate[] => {
  return data.certificates;
};

export const getSkills = (data: IResume): ISkill[] => {
  return data.skills;
};