import { IAppointment } from "@/interfaces/dataInterfaces";
import { format } from "date-fns";

export const AppointmentCard = ({ appointment }: { appointment: IAppointment }) => (
  <div className="flex flex-col gap-3 rounded-lg border border-[#326744] bg-[#193322] hover:bg-[#193322]/80 p-4">
    <p className="text-[#90cba4] text-sm font-normal leading-normal">
      Date: {format(appointment.appointmentDate, "dd MMMM yyy")}
    </p>
    <p className="text-white text-base font-bold leading-tight">
      Queue:{" "}
      <span className="text-[#13ec5b]">#{appointment.queueNumber}</span>
    </p>
    <p className="text-[#90cba4] text-sm font-normal leading-normal">
      Status: {appointment.status}
    </p>
  </div>
);
