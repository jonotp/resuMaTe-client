import { ID } from "./ID.interface";

export interface ICertificate extends ID{
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
