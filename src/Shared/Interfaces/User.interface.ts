export interface IUser {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: string,
  positionTitle?: string,
  careerObjective?: string,
}

export const DefaultUser: IUser = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  positionTitle: "",
  address: "",
  careerObjective: "",
};