"use client";

import { AppointmentsHeader } from "./header";
import { TabNavigation } from "./tabNav";
import { useEffect, useState } from "react";
import { AppointmentCard } from "./appCard";
import { useAuthStore } from "@/stores/useAuthStore";
import api from "@/lib/axios";
import { IAppointment } from "@/interfaces/dataInterfaces";

export const AppointmentsPage = ({isPast = false} : {isPast: boolean} ) => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);

  const { isLoggedIn, user } = useAuthStore();

  useEffect(() => {
    if (!isLoggedIn) return;

    const fetchAppointments = async () => {
      try {
        if (isPast) {
          const response = await api.get(`/api/appointments/user/${user?.id}?past=${isPast}`);
          setAppointments(response.data.appointments);
        } else {
          const response = await api.get(`/api/appointments/user/${user?.id}`);
          setAppointments(response.data.appointments);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAppointments();
  }, [isLoggedIn, user, isPast]);

  return (
    // Use responsive padding: small on mobile, larger on desktop
    <div className="flex flex-1 justify-center py-5 px-4 sm:px-10 md:px-20 lg:px-40">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <AppointmentsHeader />
        <TabNavigation />
        <div className="space-y-2">
          {appointments.map((app) => (
            <AppointmentCard key={app.id} appointment={app} />
          ))}
        </div>
      </div>
    </div>
  );
};
