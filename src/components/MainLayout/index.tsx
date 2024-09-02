import React from "react";

function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex-grow max-w-screen-lg mx-auto p-6 py-4">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
