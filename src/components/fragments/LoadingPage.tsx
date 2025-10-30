const LoadingPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="text-center space-y-4">
        {/* Spinning Circle */}
        <div className="relative inline-block">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-600 text-sm">Memuat...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
