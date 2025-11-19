import { CalendarMonthIcon } from "../icons";

interface props {
  onBookClick?: () => void;
}

export const NoAppointmentsState = ({ onBookClick }: props) => {
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
            You have no appointments scheduled
          </p>
          <p className="text-[#90cb9f] text-sm font-normal leading-normal">
            Get started by scheduling your first appointment.
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={onBookClick}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#4cf676] text-[#102315] hover:bg-[#4cf676]/90 transition-opacity text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Book a New Appointment</span>
        </button>
      </div>
    </div>
  );
};