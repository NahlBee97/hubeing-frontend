export const TabNavigation = () => (
  <div className="pb-3">
    <div className="flex border-b border-[#316843] px-4 gap-8">
      <a
        className="flex flex-col items-center justify-center border-b-[3px] border-b-[#3df57a] text-white pb-[13px] pt-4"
        href="#"
      >
        <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">
          Upcoming
        </p>
      </a>
      <a
        className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#90cba4] pb-[13px] pt-4 hover:text-white"
        href="#"
      >
        <p className="text-[#90cba4] text-sm font-bold leading-normal tracking-[0.015em]">
          Past
        </p>
      </a>
    </div>
  </div>
);
