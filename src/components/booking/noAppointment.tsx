import { PlusIcon } from "../icons";

export const NoAppointment = ({onClick}: {onClick: () => void}) => {
  return (
    <div className="flex flex-[2_2_0px] flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className="text-white text-base font-bold leading-tight">
          No appointment booked
        </p>
        <p className="text-[#90cba4] text-sm font-normal leading-normal">
          Select a date to book an appointment.
        </p>
      </div>
      <button
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#22492f] text-white pr-2 gap-1 text-sm font-medium leading-normal w-fit hover:bg-[#22492f]/80"
        onClick={onClick}
      >
        <PlusIcon />
        <span className="truncate">Book Appointment for this Date</span>
      </button>
    </div>
  );
};
