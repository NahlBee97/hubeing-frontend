"use client";

import toast from "react-hot-toast";
import { ConfirmModal } from "../confirmModal";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import api from "@/lib/axios";
import { monthNames } from "./month";
import { useAuthStore } from "@/stores/useAuthStore";
import { format } from "date-fns";
import { IAppointment } from "@/interfaces/dataInterfaces";
import { AppointmentCard } from "./appointmentCard";
import { NoAppointment } from "./noAppointment";

export const AppointmentDetails = () => {
  const { isLoggedIn } = useAuthStore();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeDay = Number(searchParams.get("day"));
  const activeMonth = Number(searchParams.get("month"));
  const activeYear = Number(searchParams.get("year"));

  const activeDateObject = new Date(activeYear, activeMonth, activeDay);
  const appointmentDate = format(activeDateObject, "yyyy-MM-dd");

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [appointments, setAppointments] = useState<IAppointment[]>([]);

  const fetchAppointments = useCallback(async () => {
    if (!isLoggedIn) return;

    const response = await api.get(`/api/appointments/${appointmentDate}`);
    setAppointments(response.data.appointments);
  }, [isLoggedIn, appointmentDate]);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  const handleBookAppointment = async () => {
    try {
      await api.post("/api/appointments", { appointmentDate });
      toast.success("Appointment created successfully");
    } catch (error) {
      console.error("Fail to make appointment:" + error);
      toast.error("Fail to make appointment");
    } finally {
      fetchAppointments();
    }
  };

  const handleClickAdd = () => {
    if (!activeDay) {
      toast.error("Please Select A Date");
    } else {
      setIsConfirmModalOpen(true);
    }
  };

  return (
    <div className="p-4">
      {/* This flex container is mobile-first:
      - flex-col (stacks vertically on mobile)
      - lg:flex-row (switches to horizontal on large screens)
    */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 rounded-lg">
        {appointments.length === 0 ? (
          <NoAppointment onClick={handleClickAdd} />
        ) : (
          <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-bold leading-tight">
                Appointment List
              </p>
              {appointments.map((app) => (
                <AppointmentCard key={app.id} appointment={app} />
              ))}
            </div>
          </div>
        )}
      </div>
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={() => {
          if (isLoggedIn) {
            handleBookAppointment();
          } else {
            router.push(`/login?callbackUrl=${pathname}`);
          }
        }}
        confirmText={isLoggedIn ? "Book" : "Login"}
        title={
          isLoggedIn
            ? `Book appointment on ${activeDay} ${monthNames[activeMonth]} ${activeYear}?`
            : "Login first to make appointment"
        }
      />
    </div>
  );
};
