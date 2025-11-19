"use client";

import { getDayArrayForMonth } from "@/helper/getDaysInMonth";
import { DayOfWeekHeader } from "./dayOfWeekHeader";
import { getFirstDayOfMonthWeekIndex } from "@/helper/getFirstDayOfTheMonth";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface props {
  day?: string;
  month?: string;
  year: number;
  monthIndex: number;
}

export const monthNames: string[] = [
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

export const MonthCalendar = ({ monthIndex, day, month, year }: props) => {
  const pathname = usePathname();
  const now = new Date();
  const today = now.getDate();
  const thisMonth = now.getMonth();

  const router = useRouter();
  const searchParams = useSearchParams();

  const days = getDayArrayForMonth(year, monthIndex);
  const firstDayOfTheMonthWeekIndex = getFirstDayOfMonthWeekIndex(
    year,
    monthIndex
  );
  const newArray = Array.from(
    { length: firstDayOfTheMonthWeekIndex },
    (_, index) => index
  );

  const handleDateClick = (day: number) => {
    // Create new URLSearchParams object from current params
    const params = new URLSearchParams(searchParams.toString());

    params.set("year", year.toString());

    params.set("month", monthIndex.toString());

    params.set("day", day.toString());

    // Navigate with new params
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex min-w-72 max-w-[336px] flex-1 flex-col gap-0.5">
      <div className="text-center">
        <p className="text-white text-base font-bold leading-tight flex-1 text-center">
          {monthNames[monthIndex]} {year}
        </p>
      </div>
      <DayOfWeekHeader />
      <div className="grid grid-cols-7">
        {/* These buttons are hardcoded as per the HTML provided */}
        {newArray.map((ar) => (
          <div key={ar} className="h-12 w-full"></div>
        ))}
        {/* Render the rest of the days */}
        {days.map((d) => (
          <button
            key={d}
            className={`h-12 w-full text-white text-sm font-medium leading-normal disabled:cursor-not-allowed`}
            disabled={d < today && monthIndex === thisMonth}
            onClick={() => handleDateClick(d)}
          >
            <div
              className={`flex size-full items-center justify-center rounded-full  ${
                Number(day) === d && monthIndex === Number(month)
                  ? "bg-[#13ec5b] text-[#112217]"
                  : d < today && monthIndex === thisMonth
                  ? "hover:bg-none text-gray-500"
                  : "hover:bg-[#22492f]"
              }`}
            >
              {d}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
