import { MonthCalendar } from "@/components/booking/month";
import { PatientTable } from "./patientTable";

const monthNames: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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
      <div className="flex justify-stretch">
        <div className="flex flex-1 flex-col sm:flex-row gap-3 flex-wrap px-4 py-3 justify-between">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-white bg-[#22492c] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-300 hover:text-[#102315]">
            <span className="truncate">
              Cancel All for {monthNames[10]} {day}th
            </span>
          </button>
        </div>
      </div>
      <PatientTable day={day} month={month} year={year} />
    </div>
  );
};
