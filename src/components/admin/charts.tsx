"use client";

import { ResponsiveContainer } from "recharts";
import {
  BarChart as RechartsBarChart,
  Bar,
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { CustomTooltip } from "./customTooltip";
import { IAppointmentSummary } from "./dashboard";

export const BarChart = ({ data }: { data: IAppointmentSummary }) => {
  const barChartData = [
    { name: "Completed", value: data.completed, fill: "#3df56b" },
    {
      name: "Cancelled",
      value: data.cancelledByUser + data.cancelledByAdmin,
      fill: "#ffc658",
    },
    { name: "Pending", value: data.booked, fill: "#8884d8" },
  ];

  return (
    <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#31683f] p-6">
      <p className="text-white text-base font-medium leading-normal">
        Appointments by Status
      </p>
      <div className="w-full h-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={barChartData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#31683f"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              stroke="#90cb9f"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#90cb9f"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              allowDecimals={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#22492c" }} />
            <Bar dataKey="value" fill="#4cf676" radius={[4, 4, 0, 0]} />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const AreaChart = ({
  data,
}: {
  data: { name: string; value: number }[];
}) => {
  const totalAppointment = data
    ? Object.values(data).reduce((acc, point) => acc + point.value, 0)
    : 0;
  return (
    <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#31683f] p-6">
      <p className="text-white text-base font-medium leading-normal">
        New Patient Registrations Over Time
      </p>
      <p className="text-white tracking-light text-3xl md:text-[32px] font-bold leading-tight truncate">
        {totalAppointment}
      </p>
      <div className="w-full h-[200px] min-h-[180px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsAreaChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4cf676" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4cf676" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#31683f"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              stroke="#90cb9f"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#90cb9f"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              allowDecimals={false}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#4cf676", strokeWidth: 1 }}
            />
            <Area
              type="monotone"
              dataKey="value"
              name="New Patients"
              stroke="#4cf676"
              strokeWidth={2}
              fill="url(#colorArea)"
              fillOpacity={1}
            />
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
