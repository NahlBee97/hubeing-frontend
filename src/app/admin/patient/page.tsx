import { PatientListPage } from "@/components/admin/patient/patientListPage";

export default async function Patient({
  searchParams,
}: {
  searchParams: Promise<{ day?: string; month?: string; year?: string }>;
}) {
  const { day, month, year } = await searchParams;
  return <PatientListPage day={day} month={month} year={year} />;
}
