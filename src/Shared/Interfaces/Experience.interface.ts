export interface IExperience {
  id: string;
  title: string;
  company: string;
  location?: string;
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