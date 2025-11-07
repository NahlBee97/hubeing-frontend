import { AppointmentStatus, UserRoles } from "./enums";

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  password: string | null;
  imageUrl: string | null;
  role: UserRoles;
  createdAt: Date;

  // Relational fields
  appointments: IAppointment[];
}

export interface IAppointment {
  id: string;
  appointmentDate: Date;
  queueNumber: number;
  status: AppointmentStatus;
  createdAt: Date;

  // Relational fields
  patientId: string;
  patient: IUser;
}