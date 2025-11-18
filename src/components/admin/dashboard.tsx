"use client";

import { StatCard } from "./statCard";
import { AreaChart, BarChart } from "./charts";
import { useEffect, useState } from "react";
import api from "@/lib/axios";

export interface IAppointmentSummary {
  booked: number;
  completed: number;
  cancelledByUser: number;
  cancelledByAdmin: number;
  totalAppointmentsByMonth: {name: string; value: number}[]

}

export const Dashboard = () => {
  const [appointmentSummary, setAppointmentSummary] =
    useState<IAppointmentSummary | null>(null);

  useEffect(() => {
    const fetchAppointmentSummary = async () => {
      try {
        const response = await api.get("/api/appointments/summary");
        setAppointmentSummary(response.data.summary);
      } catch (error) {
        console.error("fail to fetch appointment summary: " + error);
      }
    };
    fetchAppointmentSummary();
  }, []);

  const totalAppointment = appointmentSummary?.totalAppointmentsByMonth
    ? Object.values(appointmentSummary.totalAppointmentsByMonth).reduce((acc, point) => acc + point.value, 0)
    : 0;

  if (!appointmentSummary) return;

  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-white tracking-light text-3xl md:text-[32px] font-bold leading-tight min-w-72">
          Patient Insights
        </p>
      </div>
      {/* Stat cards container - responsive grid */}
      <div className="grid grid-cols-1 grid-rows-2 gap-2 p-4">
        <div className="flex flex-wrap gap-4">
          <StatCard
            title="Total Appointments Booked"
            value={totalAppointment}
          />
          <StatCard
            title="Completed"
            value={appointmentSummary?.completed as number}
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <StatCard
            title="Cancelled By User"
            value={appointmentSummary?.cancelledByUser as number}
          />
          <StatCard
            title="Cancelled By Doctor"
            value={appointmentSummary?.cancelledByAdmin as number}
          />
          <StatCard
            title="Pending Appointments"
            value={appointmentSummary?.booked as number}
          />
        </div>
      </div>

      <h2 className="text-white text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Appointment Trends
      </h2>
      {/* Charts container - responsive flex wrap */}
      <div className="flex flex-wrap gap-4 px-4 py-6">
        <BarChart data={appointmentSummary} />
        <AreaChart data={appointmentSummary.totalAppointmentsByMonth} />
      </div>
    </div>
  );
};
