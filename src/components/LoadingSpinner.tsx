import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-8 border-primary-green border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-600 pt-3 text-md bold">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
