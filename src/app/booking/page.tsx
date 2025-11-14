import { BookingPage } from "@/components/booking/bookingPage";

export default async function Booking({
  searchParams,
}: {
  searchParams: Promise<{ day?: string, month?: string, year?: string }>;
}) {
  const { day, month, year} = await searchParams;
  return (
    <div className="layout-container flex h-full grow flex-col">
      <BookingPage day={day} month={month} year={year} />
    </div>
  );
}
