"use client"

import { useRouter } from "next/navigation";

interface props {
  mobile: boolean;
  onButtonClick: () => void;
}

export const AuthButtons = ({ mobile = false, onButtonClick }: props) => {
  const router = useRouter();
  return (
    <div
      className={`flex ${
        mobile ? "flex-col items-center gap-4 w-full px-8" : "flex-row gap-2"
      }`}
    >
      <button
        className="flex min-w-[84px] w-full md:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#13ec5b] text-[#112217] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#13ec5b]/90"
        onClick={() => {
          onButtonClick();
          router.push("/login");
        }}
        >
        <span className="truncate">Login</span>
      </button>
      <button
        className="flex min-w-[84px] w-full md:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#23482f] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#23482f]/90"
        onClick={() => {
          onButtonClick();
          router.push("/register");
        }}
      >
        <span className="truncate">Register</span>
      </button>
    </div>
  );
} 
  