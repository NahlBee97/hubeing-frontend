import { AppointmentsPage } from "@/components/appointments/appointmentPage";

export default async function Appointments({
  searchParams,
}: {
  searchParams: Promise<{ past?: string }>;
}) {
  const { past } = await searchParams;

  let isPast = false;

  if (past === "true") {
    isPast = true;
  }

  return (
    <div className="layout-container flex h-full grow flex-col">
      {/* Header is intentionally skipped as requested by the user */}
      <AppointmentsPage isPast={isPast} />
    </div>
  );
}
