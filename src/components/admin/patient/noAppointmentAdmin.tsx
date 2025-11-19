import { CalendarMonthIcon } from "@/components/icons";

export const NoAppointmentsAdminState = () => {
  return (
    <div className="flex flex-col px-4 py-16 sm:py-24 w-full">
      <div className="flex flex-col items-center gap-8">
        {/* Icon Circle */}
        <div className="flex items-center justify-center w-24 h-24 bg-[#22492c] rounded-full text-[#4cf676]">
          <CalendarMonthIcon />
        </div>

        {/* Text Content */}
        <div className="flex max-w-lg flex-col items-center gap-3 text-center">
          <p className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
            No appointments scheduled
          </p>
        </div>
      </div>
    </div>
  );
};
