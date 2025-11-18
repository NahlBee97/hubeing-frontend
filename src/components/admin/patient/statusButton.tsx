import { PatientStatus } from "./patientTable";

export const StatusButton = ({ status }: { status: PatientStatus }) => (
  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#22492c] text-white text-sm font-medium leading-normal w-full">
    <span className="truncate">{status}</span>
  </button>
);
