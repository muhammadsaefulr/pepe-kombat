import BottomNavDashboard from "@/components/BottomNavDashboard";
import MainLayout from "@/components/MainLayout";
import { NavbarDashboard } from "@/components/NavbarDashboard";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // const supabase = createClientServ();

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (!user) {
  //   return redirect("/")
  // } else {
  //   console.log(user)
  // }

  return (
    <div className="w-full flex justify-center mx-auto lg:w-1/3">
      <MainLayout>
        <NavbarDashboard id={11} />
        {children}
        <BottomNavDashboard />
      </MainLayout>
    </div>
  );
}
