// components/FooterLink.tsx
import Link from "next/link";
import React from "react";

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <Link
      href={href}
      className="text-[#92c9a4] text-base font-normal leading-normal min-w-40 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
};
