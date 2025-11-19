"use client";

import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { UserNavbar } from "../navbar/userNavbar";
import { AdminNavbar } from "../navbar/adminNavbar";

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const { user, isAuthLoading } = useAuthStore();

  useEffect(() => {
    if (isAuthLoading) return;

    const isPathAdmin = pathname.startsWith("/admin");
    const isAdminUser = user?.role === "ADMIN";

    if (isPathAdmin && !isAdminUser) {
      router.push("/login");
      return;
    }

    if (isAdminUser && !isPathAdmin) {
      router.push("/admin");
      return;
    }

  }, [isAuthLoading, pathname, user, router]);

  return (
    <>
      {/* ✅ Tampilkan Navbar jika admin */}
      {user?.role !== "ADMIN" ? <UserNavbar /> : <AdminNavbar />}

      {/* ✅ Tampilkan konten utama */}
      {children}
    </>
  );
}
