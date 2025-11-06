"use client"

import Link from "next/link";

interface props {
  href: string;
  children: React.ReactNode;
}

export const FormLink = ({ href, children }: props) => (
  <Link
    href={href}
    className="text-[#90cba4] text-sm font-normal leading-normal text-center underline cursor-pointer hover:text-[#b0e0c4] transition-colors"
  >
    {children}
  </Link>
);