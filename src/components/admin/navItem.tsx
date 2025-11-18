import Link from "next/link";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  link: string;
  active?: boolean;
}

export const NavItem = ({
  icon,
  label,
  link,
  active = false,
}: NavItemProps) => (
  <Link
    href={link}
    className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
      active ? "bg-[#22492c]" : "hover:bg-[#22492c] cursor-pointer"
    }`}
  >
    <div className="text-white">{icon}</div>
    <p className="text-white text-sm font-medium leading-normal">{label}</p>
  </Link>
);
