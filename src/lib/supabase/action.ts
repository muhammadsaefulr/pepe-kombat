"use server";

import { redirect } from "next/navigation";
import { createClientServ } from "./supServer";

interface userAuthLogin {
  email: string;
  password: string;
}

interface userAuthRegister {
  username: string;
  email: string;
  password: string;
}

export const signUpAction = async (form: userAuthRegister) => {
  const supabase = createClientServ();

  if (!form.email || !form.password) {
    return { error: "Email and password are required" };
  }

  console.log(form);

  const { data, error: createUserError } = await supabase.auth.signUp({
    email: form.email,
    password: form.password,
  });

  if (createUserError) {
    console.error(createUserError.code + " " + createUserError.message);
    return
  }

  const { error: createUserNameError } = await supabase
    .from('profiles')
    .insert({ id: "d98cda1a-eeed-4c20-97b9-ac5bb8c926b1", username: form.username });

  if (createUserNameError) {
    console.error(createUserNameError.code + " " + createUserNameError.message);
    return
  }

  redirect("/")
};

export const signInAction = async (userData: userAuthLogin) => {
  const supabase = createClientServ();

  const { error } = await supabase.auth.signInWithPassword({
    email: userData.email,
    password: userData.password,
  });

  if (error) {
    console.log(error);
    return redirect("/");
  }

  return redirect("/dashboard");
};

export const signOutAction = async () => {
  const supabase = createClientServ();
  await supabase.auth.signOut();
  return redirect("/");
};
