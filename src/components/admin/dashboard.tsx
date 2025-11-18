import { StatCard } from "./statCard";
import { AreaChart, BarChart } from "./charts";

export const Dashboard = () => (
  <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
    <div className="flex flex-wrap justify-between gap-3 p-4">
      <p className="text-white tracking-light text-3xl md:text-[32px] font-bold leading-tight min-w-72">
        Patient Insights
      </p>
    </div>
    {/* Stat cards container - responsive grid */}
    <div className="flex flex-wrap gap-4 p-4">
      <StatCard title="Total Appointments Booked" value="1,250" />
      <StatCard title="Completed Appointments" value="950" />
      <StatCard title="Cancelled Appointments" value="150" />
      <StatCard title="Pending Appointments" value="150" />
    </div>

    <h2 className="text-white text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
      Appointment Trends
    </h2>
    {/* Charts container - responsive flex wrap */}
    <div className="flex flex-wrap gap-4 px-4 py-6">
      <BarChart />
      <AreaChart />
    </div>
  </div>
);

