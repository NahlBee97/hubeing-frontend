"use client"

import { ResponsiveContainer } from "recharts";

const barChartData = [
  { name: "Completed", value: 950, fill: "#3df56b" },
  { name: "Cancelled", value: 150, fill: "#ffc658" },
  { name: "Pending", value: 150, fill: "#8884d8" },
];

const areaChartData = [
  { name: "Jan", value: 65 },
  { name: "Feb", value: 59 },
  { name: "Mar", value: 80 },
  { name: "Apr", value: 81 },
  { name: "May", value: 56 },
  { name: "Jun", value: 105 },
];

// eslint-disable-next-line
export const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#102315] border border-[#31683f] p-3 rounded-lg shadow-lg">
        <p className="text-sm text-[#90cb9f]">{`${label}`}</p>
        <p className="text-base text-white">{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};
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



export const BarChart = () => (
  <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#31683f] p-6">
    <p className="text-white text-base font-medium leading-normal">
      Appointments by Status
    </p>
    <p className="text-white tracking-light text-3xl md:text-[32px] font-bold leading-tight truncate">
      1,250
    </p>
    <div className="flex gap-1">
      <p className="text-[#90cb9f] text-base font-normal leading-normal">
        Total
      </p>
      <p className="text-[#0bda3f] text-base font-medium leading-normal">
        +10%
      </p>
    </div>
    <div className="w-full h-[200px] min-h-[180px] mt-4">
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

export const AreaChart = () => (
  <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#31683f] p-6">
    <p className="text-white text-base font-medium leading-normal">
      New Patient Registrations Over Time
    </p>
    <p className="text-white tracking-light text-3xl md:text-[32px] font-bold leading-tight truncate">
      300
    </p>
    <div className="flex gap-1">
      <p className="text-[#90cb9f] text-base font-normal leading-normal">
        Last 6 Months
      </p>
      <p className="text-[#0bda3f] text-base font-medium leading-normal">+5%</p>
    </div>
    <div className="w-full h-[200px] min-h-[180px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart
          data={areaChartData}
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
