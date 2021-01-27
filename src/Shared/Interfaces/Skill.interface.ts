import { ID } from "./ID.interface"

export interface ISkill extends ID {
  id: string;
  name: string;
  level: number;
}

export const DefaultSkill: ISkill = {
  id: "",
  name: "",
  level: 1,
}