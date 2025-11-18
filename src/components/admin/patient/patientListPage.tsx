import { MonthCalendar } from "@/components/booking/month";
import { PatientTable } from "./patientTable";

interface props {
  day?: string;
  month?: string;
}

export const PatientListPage = ({ day, month}: props) => {
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
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#3df56b] text-[#102315] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80">
            <span className="truncate">Add Walk-in</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#22492c]">
            <span className="truncate">Cancel All for 07/16/2024</span>
          </button>
        </div>
      </div>
      <PatientTable />
    </div>
  );
};
