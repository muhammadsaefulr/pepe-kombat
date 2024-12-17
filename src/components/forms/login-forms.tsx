import { formLoginSchema } from "@/lib/form-schema";
import { useState } from "react";
import { z } from "zod";
import { useLogin } from "@/lib/tanstack/tanstackquery-handler";
import LoginTelegramBtn from "@/components/forms/login-telegram";

type LoginFormData = z.infer<typeof formLoginSchema>;

const LoginForm: React.FC = () => {
  const { mutate: submitLogin } = useLogin()
  const [formData, setFormData] = useState<LoginFormData>({
    userid: "",
    username: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

    // console.log(result);

    if (!result.success) {
      const validationErrors: { [key: string]: string } = {};
      result.error.errors.forEach((error) => {
        validationErrors[error.path[0]] = error.message;
      });
      setErrors(validationErrors);
      return;
    } else {
      // submitLogin(formData)
    }

    setErrors({});
  };

  return (
    <form onSubmit={handleSubmitSigin} className="pb-12">
      <div className="flex flex-col gap-y-2">
        <div className="py-4 flex gap-x-2">
          <img alt="profile" className="rounded-md" src="/icon/iconamoon_profile-fill.svg" />
          <input
            placeholder="Masukan User ID"
            id="userid"
            name="userid"
            value={formData.userid}
            onChange={handleInputChange}
            className={`w-full font-semibold text-black px-3 border rounded-md shadow-deep-green ${errors.email ? "border-red-500" : "border-black"
              }`}
          />
        </div>
        {errors.userid && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div className="flex flex-col gap-y-2">
        <div className="py-4 flex gap-x-2">
          <img className="rounded-md" src="/icon/mdi_password.svg" />
          <input
            placeholder="Enter Username To Signin"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border font-semibold text-black rounded shadow-deep-cream ${errors.username ? "border-red-500" : "border-black"
              }`}
          />
        </div>
        {errors.username && <p className="text-red-500">{errors.username}</p>}
      </div>

      <button
        type="submit"
        className="bg-[#82B894] flex justify-center gap-x-2 text-black font-semibold w-full px-4 py-2 mt-3 rounded shadow-deep-black"
      >
        Login
      </button>
      <LoginTelegramBtn />
    </form>
  );
};

export default LoginForm;
