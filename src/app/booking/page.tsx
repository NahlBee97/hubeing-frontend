import { BookingPage } from "@/components/booking/bookingPage";

export default async function Booking({
  searchParams,
}: {
  searchParams: Promise<{ day?: string, month?: string, year?: string }>;
}) {
  let { day, month, year} = await searchParams;
  if (!day) {
    const now = new Date();
    day = String(now.getDate());
    month = String(now.getMonth());
    year = String(now.getFullYear());
  }
  return (
    <div className="layout-container flex h-full grow flex-col">
      <BookingPage day={day} month={month} year={year} />
    </div>
  );
}
