import BottomNavDashboard from "@/components/BottomNavDashboard";
import MainLayout from "@/components/MainLayout";
import { NavbarDashboard } from "@/components/NavbarDashboard";
import { getSession } from "@/lib/telegram/telegramSession";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getSession();

  return (
    <div className="w-full flex justify-center mx-auto lg:w-1/3">
      <MainLayout>
        <NavbarDashboard username = {session?.user.username!} />
        {children}
        <BottomNavDashboard />
      </MainLayout>
    </div>
  );
}
