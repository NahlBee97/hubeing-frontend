import { IAppointment } from "@/interfaces/dataInterfaces";

export const AppointmentCard = ({
  appointment,
}: {
  appointment: IAppointment;
}) => (
  <div className="w-60 flex flex-col justify-center items-center gap-3 rounded-lg border border-[#326744] bg-[#193322] p-4">
    <div className="text-[#13ec5b] text-2xl">#{appointment.queueNumber}</div>
    <h2 className="text-base font-bold leading-tight text-white">
      {appointment.patient.name}
    </h2>
    <p className="text-sm font-normal leading-normal text-[#92c9a4]">
      Check in time: {16 + (appointment.queueNumber)}.00 p.m
    </p>
    <p className="text-sm font-normal leading-normal text-[#92c9a4]">
      Status: {appointment.status}
    </p>
  </div>
);
