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
