"use client";

import { useState } from "react";
import { CloseIcon, LogoIcon, MenuIcon } from "../icons";
import { NavLinks } from "./navlinks";
import { AuthButtons } from "./authButtons";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import { ProfileMenu } from "./profileMenu";

export const UserNavbar = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuthStore();
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // Use relative positioning to contain the absolute mobile menu
    <header className="sticky top-0 z-25 flex items-center justify-between whitespace-nowrap border-b border-solid bg-[#112217] border-b-[#23482f] px-4 sm:px-6 md:px-10 py-3">
      {/* Logo and Brand Name */}
      <div
        className="flex items-center gap-4 text-white hover:cursor-pointer"
        onClick={() => router.push("/")}
      >
        <div className="size-4">
          <LogoIcon />
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          <span className="text-[#13ec5b]">Hu</span>Being
        </h2>
      </div>

      {/* Desktop Navigation (hidden on small screens) */}
      <nav className="hidden md:flex flex-1 justify-end items-center gap-8">
        <NavLinks
          mobile={false}
          isLoggedIn={isLoggedIn}
          onClickLink={() => null}
        />
        {isLoggedIn ? (
          <ProfileMenu />
        ) : (
          <AuthButtons mobile={false} onButtonClick={() => null} />
        )}
      </nav>

      {/* Mobile Menu Button (visible on small screens) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2 rounded-md hover:bg-[#23482f] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#13ec5b]"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Overlay (conditional rendering) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-screen bg-[#112217] bg-opacity-95 z-50">
          <nav className="flex flex-col items-center justify-center gap-8 pt-16">
            <NavLinks
              mobile={true}
              isLoggedIn={isLoggedIn}
              onClickLink={() => setIsMobileMenuOpen(false)}
            />
            <div className="border-t border-[#23482f] w-3/4 my-4"></div>
            <AuthButtons
              mobile={true}
              onButtonClick={() => setIsMobileMenuOpen(false)}
            />
          </nav>
        </div>
      )}
    </header>
  );
};

// Default export for the component
export default UserNavbar;
