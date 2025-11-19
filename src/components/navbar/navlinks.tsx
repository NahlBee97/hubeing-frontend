"use client";

import { useAuthStore } from "@/stores/useAuthStore";
import Link from "next/link";

interface props {
  mobile: boolean;
  onClickLink: () => void;
}

export const NavLinks = ({ mobile = false, onClickLink }: props) => {
  const { isLoggedIn, user } = useAuthStore();

  const adminLinks = [
    { name: "Dashboard", link: "/admin" },
    { name: "Patient List", link: "/admin/patient" },
    { name: "Settings", link: "/admin/settings" },
  ];

  const userLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Book Appointment", link: "/booking" },
    { name: "My Appointment", link: "/appointments" },
  ];

  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
  ];

  return (
    <div
      className={`flex items-center ${
        mobile ? "flex-col gap-6 text-lg" : "flex-row gap-9 text-sm"
      }`}
    >
      {(isLoggedIn && user?.role === "USER"
        ? userLinks
        : isLoggedIn && user?.role === "ADMIN"
        ? adminLinks
        : links
      ).map((link) => (
        <Link
          key={link.name}
          href={link.link}
          onClick={onClickLink}
          className="text-white font-medium leading-normal hover:text-gray-300"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
