"use client";

import { useEffect, useState } from "react";
import { TableActionButton } from "./actionButton";
import { StatusButton } from "./statusButton";
import api from "@/lib/axios";
import { format } from "date-fns";
import { useAuthStore } from "@/stores/useAuthStore";
import { IAppointment } from "@/interfaces/dataInterfaces";
import { NoAppointmentsAdminState } from "./noAppointmentAdmin";

interface props {
  day?: string;
  month?: string;
  year?: string;
}

export const PatientTable = ({ day, month, year }: props) => {
  const { isLoggedIn } = useAuthStore();
  const [appointments, setAppointments] = useState<IAppointment[]>([]);

  const activeDateObject = new Date(Number(year), Number(month), Number(day));

  const appointmentDate = format(activeDateObject, "yyyy-MM-dd");

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!isLoggedIn) return;

      const response = await api.get(`/api/appointments/${appointmentDate}`);
      setAppointments(response.data.appointments);
    };
    fetchAppointments();
  }, [isLoggedIn, appointmentDate]);

  if(appointments.length === 0) return <NoAppointmentsAdminState/>

  return (
    <div className="px-4 py-3">
      {/* This container enables horizontal scrolling on small screens */}
      <div className="flex overflow-hidden overflow-x-auto rounded-lg border border-[#31683f] bg-[#102315]">
        <table className="min-w-full flex-1">
          <thead>
            <tr className="bg-[#18341f]">
              <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                Queue #
              </th>
              <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                Patient Name
              </th>
              <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                Phone Number
              </th>
              <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                Status
              </th>
              <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr
                key={appointment.queueNumber}
                className="border-t border-t-[#31683f]"
              >
                <td className="h-[72px] px-4 py-2 text-[#90cb9f] text-sm font-normal leading-normal">
                  {appointment.queueNumber}
                </td>
                <td className="h-[72px] px-4 py-2 text-white text-sm font-normal leading-normal">
                  {appointment.patient.name}
                </td>
                <td className="h-[72px] px-4 py-2 text-[#90cb9f] text-sm font-normal leading-normal">
                  {appointment.patient.phone}
                </td>
                <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <StatusButton status={appointment.status} />
                </td>
                <TableActionButton status={appointment.status} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
