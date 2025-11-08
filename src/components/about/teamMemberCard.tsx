interface props {
    imageUrl: string;
    name: string;
    title: string;
}

export const TeamMemberCard = ({ imageUrl, name, title }: props) => (
  <div className="flex flex-col gap-3 text-center pb-3">
    <div className="px-4">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
        style={{ backgroundImage: `url("${imageUrl}")` }}
        // Added a fallback for accessibility and if image fails
        role="img"
        aria-label={`${name}, ${title}`}
      ></div>
    </div>
    <div>
      <p className="text-white text-base font-medium leading-normal">{name}</p>
      <p className="text-[#90cb9f] text-sm font-normal leading-normal">
        {title}
      </p>
    </div>
  </div>
);
