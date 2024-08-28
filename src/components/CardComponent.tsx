import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const CardComponent = ({
  children,
  subtitle,
  title,
  isClickable
}: {
  children?: ReactNode;
  subtitle?: string;
  title: string;
  isClickable: boolean;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-2 bg-white p-4 justify-center rounded-2xl relative duration-300 group",
        isClickable && "hover:scale-105 duration-300"
      )}
    >
      <div className="flex items-center justify-center">{children}</div>
      <div className="flex items-center justify-between text-gray-100">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-200 uppercase ">{subtitle}</span>
          <h4 className="text-2xl font-medium text-black">{title}</h4>
        </div>
      </div>
      {isClickable && (
        <div className="absolute bottom-0 right-0 hidden p-2 text-gray-200 rounded-full group-hover:flex ">
          <ArrowRight size={25} />
        </div>
      )}
    </div>
  );
};
