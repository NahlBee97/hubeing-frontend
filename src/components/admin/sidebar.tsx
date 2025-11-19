"use client";

import { usePathname } from "next/navigation";
import { GearIcon, PresentationChartIcon, UsersIcon } from "../icons";
import { NavItem } from "./navItem";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden layout-content-container md:flex md:flex-col w-full lg:w-80">
      <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#102315] p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h1 className="text-white text-lg font-semibold">Navigation</h1>
          </div>
          <div className="flex flex-col gap-2">
            <NavItem
              icon={<PresentationChartIcon />}
              label="Dashboard"
              active={
                !pathname.includes("patient") && !pathname.includes("settings")
              }
              link="/admin"
            />
            <NavItem
              icon={<UsersIcon />}
              label="Patient List"
              active={pathname.includes("patient")}
              link="/admin/patient"
            />
            <NavItem
              icon={<GearIcon />}
              label="Settings"
              active={pathname.includes("settings")}
              link="/admin/settings"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
