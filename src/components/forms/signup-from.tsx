"use client";
import { formLoginSchema, formSignupSchema } from "@/lib/form-schema";
import { useState } from "react";
import { z } from "zod";
import { signUpAction } from "@/lib/supabase/action";
import { RiMailFill } from "react-icons/ri";

type SignupFormData = z.infer<typeof formSignupSchema>;

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    username: "",
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

  const handleSubmitSigup = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = formSignupSchema.safeParse(formData);

    console.log(result);

    if (!result.success) {
      const validationErrors: { [key: string]: string } = {};
      result.error.errors.forEach((error) => {
        validationErrors[error.path[0]] = error.message;
      });
      setErrors(validationErrors);
      return;
    } else {
      signUpAction(formData);
    }

    setErrors({});
  };

  return (
    <form onSubmit={handleSubmitSigup} className="pb-12">
      <div className="flex flex-col gap-y-2">
        <div className="py-4 flex gap-x-2">
          <img className="rounded-md" src="/icon/iconamoon_profile-fill.svg" />
          <input
            placeholder="username"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className={`w-full font-semibold text-black px-3 border rounded-md shadow-deep-green ${
              errors.username ? "border-red-500" : "border-black"
            }`}
          />
        </div>
        {errors.username && <p className="text-red-500">{errors.username}</p>}
      </div>

      <div className="flex flex-col gap-y-2">
        <div className="py-4 flex gap-x-2">
          <div className="rounded-md border-gray-400 border-2 bg-[#82B894] p-2">
            <RiMailFill className="text-black" size={25} />
          </div>{" "}
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
        Register
      </button>

      {status && <p className="mt-4 text-gray-700">{status}</p>}
    </form>
  );
};

export default SignupForm;
