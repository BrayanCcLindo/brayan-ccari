function ButtonComponent({
  content,
  onClick,
}: {
  content: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-400 text-white rounded-2xl hover:bg-purple py-4 px-8 font-medium w-full hover:scale-105 duration-100 text-center"
    >
      {content}
    </button>
  );
}

export default ButtonComponent;
