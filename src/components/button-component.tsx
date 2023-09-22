import { ReactNode } from "react";

function ButtonComponent({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-400 text-white rounded-2xl hover:bg-purple py-4 px-8 font-semibold w-full hover:scale-105 duration-100 text-center "
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
