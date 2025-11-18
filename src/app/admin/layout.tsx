import { Sidebar } from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout-container flex h-full grow flex-col">
      {/* Main layout: stacks on mobile, side-by-side on large screens */}
      <div className="flex flex-col md:flex-row flex-1 justify-center py-5 px-4 sm:px-6 gap-1">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
