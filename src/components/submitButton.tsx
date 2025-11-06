"use client"

interface props {
  type?: "submit" | "button" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export const FormButton = ({
  type = "submit",
  onClick,
  children,
  disabled,
}: props) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0df259] text-[#102316] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0df259]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <span className="truncate">{children}</span>
  </button>
);
