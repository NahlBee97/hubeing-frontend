import { MonthCalendar } from "@/components/booking/month";
import { PatientTable } from "./patientTable";

interface props {
  day?: string;
  month?: string;
  year?: string;
}

export const PatientListPage = ({ day, month, year}: props) => {
  const now = new Date();

  const currentMonthIndex = now.getMonth();
  const currentYear = now.getFullYear();
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-white tracking-light text-3xl md:text-[32px] font-bold leading-tight min-w-72">
          Patient List
        </p>
      </div>
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
      <PatientTable day={day} month={month} year={year} />
    </div>
  );
};
