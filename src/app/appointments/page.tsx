import { AppointmentsPage } from "@/components/appointments/appointmentPage";

export default function Appointments() {
  return (
    <div className="layout-container flex h-full grow flex-col">
      {/* Header is intentionally skipped as requested by the user */}
      <AppointmentsPage />
    </div>
  );
}
