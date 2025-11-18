import { PatientListPage } from "@/components/admin/patient/patientListPage";

export default async function Patient({
  searchParams,
}: {
  searchParams: Promise<{ day?: string; month?: string }>;
}) {
  const { day, month } = await searchParams;
  return <PatientListPage day={day} month={month} />;
}
