import { TableActionButton } from "./actionButton";
import { StatusButton } from "./statusButton";

export type PatientStatus = "BOOKED" | "CHECKED_IN" | "COMPLETED" | "CANCELLED";

interface Patient {
  queue: number;
  name: string;
  phone: string;
  status: PatientStatus;
}

export const mockPatientData: Patient[] = [
  {
    queue: 1,
    name: "Chloe Bennett",
    phone: "(555) 123-4567",
    status: "BOOKED",
  },
  {
    queue: 2,
    name: "Ethan Carter",
    phone: "(555) 987-6543",
    status: "CHECKED_IN",
  },
  {
    queue: 3,
    name: "Isabella Foster",
    phone: "(555) 246-8013",
    status: "COMPLETED",
  },
  {
    queue: 4,
    name: "Owen Hayes",
    phone: "(555) 369-1215",
    status: "CANCELLED",
  },
  {
    queue: 5,
    name: "Ava Parker",
    phone: "(555) 789-0123",
    status: "BOOKED",
  },
];

export const PatientTable = () => (
  <div className="px-4 py-3">
    {/* This container enables horizontal scrolling on small screens */}
    <div className="flex overflow-hidden overflow-x-auto rounded-lg border border-[#31683f] bg-[#102315]">
      <table className="min-w-full flex-1">
        <thead>
          <tr className="bg-[#18341f]">
            <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
              Queue #
            </th>
            <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
              Patient Name
            </th>
            <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
              Phone Number
            </th>
            <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
              Status
            </th>
            <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {mockPatientData.map((patient) => (
            <tr key={patient.queue} className="border-t border-t-[#31683f]">
              <td className="h-[72px] px-4 py-2 text-[#90cb9f] text-sm font-normal leading-normal">
                {patient.queue}
              </td>
              <td className="h-[72px] px-4 py-2 text-white text-sm font-normal leading-normal">
                {patient.name}
              </td>
              <td className="h-[72px] px-4 py-2 text-[#90cb9f] text-sm font-normal leading-normal">
                {patient.phone}
              </td>
              <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                <StatusButton status={patient.status} />
              </td>
              <TableActionButton status={patient.status} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
