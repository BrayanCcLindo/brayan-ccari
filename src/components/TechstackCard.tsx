import { TechStackType } from "../types/type";

export const DescriptionTechStack = ({ image }: { image: TechStackType }) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 group/item">
      <img
        className="duration-100 cursor-pointer hover:scale-110"
        src={image.logo}
        alt={image.title}
      />
      <span className="text-center text-gray-50 text-xs bg-purple font-bold p-2 rounded-lg absolute top-[65px] z-20  group/edit invisible group-hover/item:visible ">
        {image.title}
      </span>
    </div>
  );
};
