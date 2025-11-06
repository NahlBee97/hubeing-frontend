import { ImageCard } from "./imageCard";

interface props {
  title: string;
  // eslint-disable-next-line
  items: any[];
}

export const SectionScroller = ({ title, items }: props) => (
  <>
    <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#13ec5b]">
      {title}
    </h2>
    {/* Horizontal scroll on mobile, overflow visible on tablet+ */}
    <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-visible">
      {/* Becomes a grid on md/lg breakpoints */}
      <div className="flex items-stretch gap-3 p-4 md:grid md:w-full md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <ImageCard
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  </>
);