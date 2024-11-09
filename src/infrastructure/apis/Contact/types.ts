export interface IContactResponse {
  status: string;
  message: string;
}

export interface IContactRequest {
  name: string;
  email: string;
  message: string;
  subject: string;
  phone: string;
}
