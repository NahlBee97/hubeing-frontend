import { CalendarIcon, CheckIcon, MagnifyingGlassIcon } from "../icons";
import { InfoCard } from "./infoCard";

export const HowItWorksSection = () => (
  <>
    <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#13ec5b]">
      How It Works
    </h2>
    <div className="flex flex-col gap-10 p-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
        <InfoCard
          icon={<MagnifyingGlassIcon />}
          title="Best Doctor"
          description="Best local doctor to heal your body."
        />
        <InfoCard
          icon={<CalendarIcon />}
          title="Book an Appointment"
          description="Schedule appointments at your convenience with real-time availability."
        />
        <InfoCard
          icon={<CheckIcon />}
          title="Get Care"
          description="Receive expert medical care and manage your health journey effectively."
        />
      </div>
    </div>
  </>
);
