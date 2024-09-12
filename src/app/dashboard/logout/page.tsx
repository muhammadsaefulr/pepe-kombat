"use client"
import { signOutAction } from "@/lib/supabase/action";
import React, { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    signOutAction();
  }, []);
  return (
    <div className="h-screen flex justify-center">
      <p>Logout In Proccess...</p>
    </div>
  );
}