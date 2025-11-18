import { PatientStatus } from "./patientTable";

export const TableActionButton = ({ status }: { status: PatientStatus }) => {
  let actionText = "";
  if (status === "BOOKED") actionText = "Check-in";
  if (status === "CHECKED_IN") actionText = "Complete";
  // No action for COMPLETED or CANCELLED

  if (!actionText) {
    return (
      <td className="h-[72px] px-4 py-2 w-60 text-[#90cb9f] text-sm font-bold leading-normal tracking-[0.015em]"></td>
    );
  }

  return (
    <td className="h-[72px] px-4 py-2 w-60 text-[#90cb9f] text-sm font-bold leading-normal tracking-[0.015em]">
      <button className="hover:text-white">{actionText}</button>
    </td>
  );
};
