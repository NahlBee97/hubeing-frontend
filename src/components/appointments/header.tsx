"use client";

import { useRouter } from "next/navigation";

export const AppointmentsHeader = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-3 p-4">
      <p className="text-[#13ec5b] tracking-light text-3xl md:text-[32px] font-bold leading-tight min-w-72">
        My Appointments
      </p>
      <button
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#22492f] text-white text-sm font-medium leading-normal hover:bg-[#22492f]/80"
        onClick={() => router.push("/booking")}
      >
        <span className="truncate">New Appointment</span>
      </button>
    </div>
  );
};
