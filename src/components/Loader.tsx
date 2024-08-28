const FullscreenLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center text-white">
        <div className="mb-4">
          <svg
            className="w-12 h-12 mx-auto animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
        <h2 className="mb-2 text-2xl font-bold">Cargando</h2>
        <p className="text-lg">Por favor, espera un momento...</p>
      </div>
    </div>
  );
};

export default FullscreenLoader;
