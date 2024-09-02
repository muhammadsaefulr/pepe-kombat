import LoginForm from "@/components/forms/login-forms";
import MainLayout from "@/components/MainLayout";
import React from "react";

export default function page() {
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
              src="/pepe.png"
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
