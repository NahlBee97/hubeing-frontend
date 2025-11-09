export const DayOfWeekHeader = () => (
  <div className="grid grid-cols-7">
    {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
      <p
        key={index}
        className="text-white text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5"
      >
        {day}
      </p>
    ))}
  </div>
);