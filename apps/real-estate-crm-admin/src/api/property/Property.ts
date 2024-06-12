import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  appointments?: Array<Appointment>;
  available: boolean | null;
  createdAt: Date;
  id: string;
  price: number | null;
  propertyType?: "Option1" | null;
  updatedAt: Date;
};
