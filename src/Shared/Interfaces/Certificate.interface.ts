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
