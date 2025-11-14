import { AppointmentDetails } from "./appointmentDetail";
import { MonthCalendar } from "./month";

interface props {
  day?: string;
  month?: string;
  year?: string;
}

export const BookingPage = ({ day, month, year}: props) => {
  const now = new Date();

  const currentMonthIndex = now.getMonth();
  const currentYear = now.getFullYear();

  return (
    // Use responsive padding: small on mobile, larger on desktop
    <div className="flex flex-1 justify-center py-5 px-4 sm:px-10 md:px-20 lg:px-40">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#13ec5b] tracking-light text-3xl md:text-[32px] font-bold leading-tight min-w-72">
            Book an Appointment
          </p>
        </div>
        {/* This flex container will wrap calendars on small screens */}
        <div className="flex flex-wrap items-start justify-center gap-6 p-4">
          <MonthCalendar
            day={day}
            month={month}
            monthIndex={currentMonthIndex}
            year={currentYear}
          />
          <MonthCalendar
            day={day}
            month={month}
            monthIndex={currentMonthIndex + 1}
            year={currentYear}
          />
        </div>

        <AppointmentDetails day={day} month={month} year={year} />
      </div>
    </div>
  );
};
