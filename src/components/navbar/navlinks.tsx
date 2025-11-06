import Link from "next/link";

export const NavLinks = ({ mobile = false }) => (
  <div
    className={`flex items-center ${
      mobile ? "flex-col gap-6 text-lg" : "flex-row gap-9 text-sm"
    }`}
  >
    <Link
      href="/"
      className="text-white font-medium leading-normal hover:text-gray-300"
    >
      Home
    </Link>
    <Link
      href="/about"
      className="text-white font-medium leading-normal hover:text-gray-300"
    >
      About
    </Link>
  </div>
);
