import LoginForm from "@/components/forms/login-forms";
import MainLayout from "@/components/MainLayout";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { redirect } from "next/navigation";
// import { cookies } from "next/headers";
import React from "react";

export default async function Page() {
  // const supabase = createServerComponentClient({ cookies });
  // const { data } = await supabase.auth.getSession();

  // console.log(data?.session)

  // if (data?.session) {
  //   return redirect("/dashboard");
  // }

  return (
    <div className="mx-auto py-9 relative">
      <MainLayout>
        <nav className="py-6 pt-2">
          <div className="border border-black text-center w-full rounded-md p-2 shadow-deep-cream">
            <h2 className="text-black font-semibold">Pepe Kombat V1</h2>
          </div>
        </nav>

        <section className="pt-12">
          <div className="2-50  mx-auto flex justify-center">
            <img
              width="310"
              className="rounded-full p-2 border border-black"
              src="/icon/pepe.svg"
              alt="pepe"
            />
          </div>

          <div className="">
            <LoginForm />
          </div>
        </section>
      </MainLayout>
    </div>
  );
}
