"use client";

import { useRouter } from "next/navigation";

export const HeroSection = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-4 md:gap-8 lg:flex-row">
      <div className="w-50 aspect-square rounded-lg bg-cover bg-center bg-no-repeat md:h-auto lg:flex-1">
        {/* eslint-disable-next-line */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrEtVcJ-tCS2qrYENVwqaq8dM_pzTklJR9ZvuuZvjW1695rkHxWJ9djpE94N-kPcU6KddvkknocgDdYmcS-CQNi2mS2fwpDVc-BU8cv3QygI4O-ukzAGq1b5AH-i7tzgDdkrHRdnFbaCUEDl5dy7l6x_zzLsRQMO2Go8hZ-9haftnUlEyqzAnj9Vkl86uBZr8SnGtXrESh9WQ0XVXU2W83Tas0PkZMg8v-MCjhWZigq3G-nlQ_-qLR_sLFHgnHSh7JblJhfQsZS7Qh"
          alt="Dr. Jatmiko"
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:flex-1 lg:justify-center">
        <div className="flex flex-col items-center text-center gap-2 md:text-left md:items-start">
          <h1 className="text-3xl font-black leading-tight tracking-[-0.033em] text-[#13ec5b] md:text-5xl">
            I`m Dr. HuBeing
          </h1>
          <h2 className="text-sm font-normal leading-normal text-white md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            hic sint earum laboriosam eos recusandae dolore cumque distinctio
            nisi voluptas adipisci nemo porro blanditiis tempora deserunt sequi
            eveniet optio. Exercitationem beatae commodi, nisi, fugit
            reprehenderit sint qui illum itaque sed voluptatibus obcaecati
            quisquam minus sequi porro maxime cum voluptatem ea.
          </h2>
        </div>
        <button
          className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#13ec5b] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-[#112217] md:h-12 md:px-5 md:text-base lg:self-start hover:bg-[#13ec5b]/90 transition-colors"
          onClick={() => router.push("/booking")}
        >
          <span className="truncate">Book Appointment</span>
        </button>
      </div>
    </div>
  );
};
