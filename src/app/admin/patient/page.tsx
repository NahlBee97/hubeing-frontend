import { PatientListPage } from "@/components/admin/patient/patientListPage";

export default async function Patient({
  searchParams,
}: {
  searchParams: Promise<{ day?: string; month?: string; year?: string }>;
}) {
  let { day, month, year } = await searchParams;
  if (!day) {
    const now = new Date();
    day = String(now.getDate());
    month = String(now.getMonth());
    year = String(now.getFullYear());
  }
  return <PatientListPage day={day} month={month} year={year} />;
}
