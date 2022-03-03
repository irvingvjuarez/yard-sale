export interface ILocalState{
  fullName: string;
  email: string;
  country: string;
  address: string;
  cardNumber: number | null;
  expirationDate: number | null;
  zipCode: number | null;
}

export const initialLocalState: ILocalState = {
  fullName: "",
  email: "",
  country: "",
  address: "",
  cardNumber: null,
  expirationDate: null,
  zipCode: null
}