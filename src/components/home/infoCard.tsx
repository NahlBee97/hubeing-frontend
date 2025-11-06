interface props {
  // eslint-disable-next-line
  icon: any;
  title: string;
  description: string;
}

export const InfoCard = ({ icon, title, description }: props) => (
  <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[#326744] bg-[#193322] p-4">
    <div className="text-white" style={{ width: "24px", height: "24px" }}>
      {icon}
    </div>
    <div className="flex flex-col gap-1">
      <h2 className="text-base font-bold leading-tight text-white">{title}</h2>
      <p className="text-sm font-normal leading-normal text-[#92c9a4]">
        {description}
      </p>
    </div>
  </div>
);