
export interface IPersonal {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  website?: string;
  position?: string;
  careerObjective?: string;
}

export const DefaultPersonal: IPersonal = {
  firstName: "",
  lastName: "",
  address: "",
  email: "",
  phone: "",
  website: "",
  position: "",
  careerObjective: ""

}