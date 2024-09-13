const FullscreenLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <div className="flex items-center justify-center w-20 h-20 text-4xl border-4 border-transparent rounded-full text-purple animate-spin border-t-purple">
          <div className="flex items-center justify-center w-16 h-16 text-2xl text-red-400 border-4 border-transparent rounded-full animate-spin border-t-red-400"></div>
        </div>
      </div>
    </div>
  );
};

export default FullscreenLoader;
