// components/Footer.tsx
import Link from "next/link";
import { FooterLink } from "./footerLinks";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../icons";

export const Footer = () => {
  return (
    <footer className="flex justify-center border-t border-solid border-t-[#23482f] bg-[#112217]">
      <div className="flex w-full max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-8 px-5 py-10 text-center">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-around">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </div>

          {/* Wrapper untuk ikon sosial */}
          <div className="flex flex-row justify-center gap-4">
            <Link href="#" aria-label="Kunjungi Twitter kami">
              <div className="text-[#92c9a4] transition-colors hover:text-white">
                <TwitterIcon />
              </div>
            </Link>
            <Link href="#" aria-label="Kunjungi Facebook kami">
              <div className="text-[#92c9a4] transition-colors hover:text-white">
                <FacebookIcon />
              </div>
            </Link>
            <Link href="#" aria-label="Kunjungi Instagram kami">
              <div className="text-[#92c9a4] transition-colors hover:text-white">
                <InstagramIcon />
              </div>
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-base font-normal leading-normal text-[#92c9a4]">
            © 2025 Nahalil Muchtar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
