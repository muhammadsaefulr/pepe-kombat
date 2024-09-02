"use client";
import { formLoginSchema } from "@/lib/form-schema";
import { useLogin } from "@/lib/tanstackquery-handler";
import { useState } from "react";
import { z } from "zod";

type LoginFormData = z.infer<typeof formLoginSchema>;

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const mutationSubmit = useLogin()

  const [status, setStatus] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = formLoginSchema.safeParse(formData);

    if (!result.success) {
      setStatus(result.error.errors.map((err) => err.message).join(", "));
      return;
    }

    mutationSubmit.mutate(result.data)

    console.log(result.data);
  };

  return (
    <form onSubmit={handleSubmit} className="pb-12">
      <div className="py-4 flex gap-x-2">
        <img
          className="bg-primary-green p-2 rounded-md"
          src="/icon/iconamoon_profile-fill.png"
        />
        <input
          placeholder="username"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className="w-full font-semibold text-black px-3  border border-black rounded-md shadow-deep-green"
          required
        />
      </div>

      <div className="py-4 flex gap-x-2">
        <img
          className="bg-primary-cream p-2 rounded-md"
          src="/icon/mdi_password.png"
        />
        <input
          placeholder="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border font-semibold text-black border-black rounded shadow-deep-cream"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-[#82B894] flex justify-center gap-x-2 text-black font-semibold w-full px-4 py-2 mt-3 rounded shadow-deep-black"
      >
        <p>{mutationSubmit.isPending ? "Loading..." : "Login"}</p>
      </button>

      {status && <p className="mt-4 text-gray-700">{status}</p>}
    </form>
  );
};

export default LoginForm;
