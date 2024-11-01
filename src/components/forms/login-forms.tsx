"use client";
import { formLoginSchema } from "@/lib/form-schema";
import { useState } from "react";
import { z } from "zod";
import { signInAction } from "@/lib/supabase/action";
import Link from "next/link";

type LoginFormData = z.infer<typeof formLoginSchema>;

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitSigin = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = formLoginSchema.safeParse(formData);

    console.log(result);

    if (!result.success) {
      const validationErrors: { [key: string]: string } = {};
      result.error.errors.forEach((error) => {
        validationErrors[error.path[0]] = error.message;
      });
      setErrors(validationErrors);
      return;
    } else {
      signInAction(formData);
    }

    setErrors({});
  };

  return (
    <form onSubmit={handleSubmitSigin} className="pb-12">
      <div className="flex flex-col gap-y-2">
        <div className="py-4 flex gap-x-2">
          <img className="rounded-md" src="/icon/iconamoon_profile-fill.svg" />
          <input
            placeholder="email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full font-semibold text-black px-3 border rounded-md shadow-deep-green ${
              errors.email ? "border-red-500" : "border-black"
            }`}
          />
        </div>
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div className="flex flex-col gap-y-2">
        <div className="py-4 flex gap-x-2">
          <img className="rounded-md" src="/icon/mdi_password.svg" />
          <input
            placeholder="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border font-semibold text-black rounded shadow-deep-cream ${
              errors.password ? "border-red-500" : "border-black"
            }`}
          />
        </div>
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      <button
        type="submit"
        className="bg-[#82B894] flex justify-center gap-x-2 text-black font-semibold w-full px-4 py-2 mt-3 rounded shadow-deep-black"
      >
        Login
      </button>
      <Link
        href="/signup"
        className="bg-[#82B894] flex justify-center gap-x-2 text-black font-semibold w-full px-4 py-2 mt-3 rounded shadow-deep-black"
      >
        Register
      </Link>

      {status && <p className="mt-4 text-gray-700">{status}</p>}
    </form>
  );
};

export default LoginForm;
