"use client"
import LoginTelegramBtn from "@/components/forms/login-telegram";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import { useEffect } from "react";
import { useTelegramLogin } from "@/lib/telegram/telegramLogin";
import { useRouter } from "next/navigation";
import { useAddFriendList, useGetSession } from "@/lib/tanstack/tanstackquery-handler";
import LoadingSpinner from "@/components/LoadingSpinner";
import WebApp from '@twa-dev/sdk'

export default function Page() {

  const route = useRouter();

  const { data: session, isLoading } = useGetSession();
  const { authenticateUser } = useTelegramLogin();

  if (typeof window !== 'undefined') {
    WebApp.ready();
    WebApp.initData

    const startParam = WebApp.initDataUnsafe.start_param

    if (startParam && startParam != undefined) {
      const { data: addflresult } = useAddFriendList({ reffId: startParam })
      console.log(addflresult)
    }
  }

  useEffect(() => {
    if (!session) {
      authenticateUser();
    } else {
      route.push("/dashboard")
    }
  }, [session]);

  if (isLoading) {
    return <LoadingSpinner />
  }

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
            <Image
              width="310"
              height="310"
              className="rounded-full p-2 border border-black"
              src="/icon/pepe.svg"
              alt="pepe"
            />
          </div>

          <div className="block">
            <LoginTelegramBtn />
          </div>
        </section>
      </MainLayout>
    </div>
  );
}
