interface props {
  title: string;
  description: string;
  imageUrl: string;
}

export const ImageCard = ({ title, description, imageUrl }: props) => (
  // Fixed width + shrink-0 for mobile scroll, auto width for grid
  <div className="flex h-full w-64 shrink-0 flex-col gap-4 rounded-lg md:w-auto">
    <div
      className="flex w-full aspect-square flex-col rounded-lg bg-cover bg-center bg-no-repeat bg-[#193322] border border-[#326744]"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Image is set as background */}
    </div>
    <div>
      <p className="text-base font-medium leading-normal text-white">{title}</p>
      <p className="text-sm font-normal leading-normal text-[#92c9a4]">
        {description}
      </p>
    </div>
  </div>
);