interface StatCardProps {
  title: string;
  value: number;
}

export const StatCard = ({ title, value }: StatCardProps) => (
  <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#22492c]">
    <p className="text-white text-base font-medium leading-normal">{title}</p>
    <p className="text-white tracking-light text-2xl font-bold leading-tight">
      {value}
    </p>
  </div>
);
