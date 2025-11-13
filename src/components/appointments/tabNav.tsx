import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const TabNavigation = () => {
  const searchParams = useSearchParams();

  const isPast = searchParams.get("past") || "";
  return (
    <div className="pb-3">
      <div className="flex border-b border-[#316843] px-4 gap-8">
        <Link
          className={`flex flex-col items-center justify-center text-white hover:text-[#90cba4] pb-[13px] pt-4 ${
            isPast === "true" ? "" : "border-b-[3px] border-b-[#3df57a]"
          }`}
          href="/appointments"
        >
          <p className="text-sm font-bold leading-normal tracking-[0.015em]">
            Upcoming
          </p>
        </Link>
        <Link
          className={`flex flex-col items-center justify-center text-white hover:text-[#90cba4] pb-[13px] pt-4 ${
            isPast === "true" ? "border-b-[3px] border-b-[#3df57a]" : ""
          }`}
          href="/appointments?past=true"
        >
          <p className="text-sm font-bold leading-normal tracking-[0.015em]">
            Past
          </p>
        </Link>
      </div>
    </div>
  );
};
