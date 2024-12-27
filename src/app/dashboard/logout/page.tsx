"use client"
import LoadingSpinner from "@/components/LoadingSpinner";
import { useLogoutSession } from "@/lib/tanstack/tanstackquery-handler";
import React from "react";

export default function Logout() {
 
  const {data, isLoading} = useLogoutSession()

  if(isLoading){
    <LoadingSpinner/>
  }

  // console.log("resp logout: ", data)

  return (
    <div className="h-screen flex justify-center">
      <p>Logout Success, Back <a className="underline" href="/">Into Login</a></p>
    </div>
  );
}
