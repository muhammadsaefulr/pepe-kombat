import BottomNavDashboard from "@/components/BottomNavDashboard";
import MainLayout from "@/components/MainLayout";
import { NavbarDashboard } from "@/components/NavbarDashboard";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex justify-center mx-auto lg:w-1/3">
      <MainLayout>
        <NavbarDashboard />
        {children}
          <BottomNavDashboard />
      </MainLayout>
    </div>
  );
}
