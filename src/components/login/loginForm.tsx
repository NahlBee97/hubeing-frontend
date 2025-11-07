"use client";

import { loginSchema } from "@/schemas/authSchemas";
import { useFormik } from "formik";
import { FormTextInput } from "../inputs";
import { FormButton } from "../submitButton";
import { FormLink } from "../formLink";
import axios from "axios";
import api from "@/lib/axios";
import { useAuthStore } from "@/stores/useAuthStore";
import { decodeJwt } from "jose";
import { IUser } from "@/interfaces/dataInterfaces";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
import { CheckBox } from "../checkBox";

interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const router = useRouter();
  const { setAccessToken, login } = useAuthStore();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values: LoginFormValues) => {
      try {
        const response = await api.post(`/api/auth/login`, values);

        const { accessToken } = response.data;

        setAccessToken(accessToken);

        const userData = decodeJwt<IUser>(accessToken);

        login(userData, accessToken);

        router.push("/");
        toast.success("Berhasil Login");
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.data.message === "Incorrect Password")
          toast.error("Password Salah!");
        } else {
          toast.error("An unexpected error occurred");
        }
      }
    },
  });

  const handleResetPassword = async () => {
    const email = formik.values.email;
    await api.post(`/api/auth/verify-reset`, { email });
    toast("We've sent an email to reset your password");
  };

  return (
    <div className="flex flex-col w-full max-w-md bg-[#102316] rounded-xl shadow-2xl overflow-hidden">
      <h2 className="text-white tracking-light text-[28px] font-bold leading-tight text-center pb-3 pt-6">
        Welcome back
      </h2>

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center gap-4 w-full px-6 py-4"
      >
        <FormTextInput
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
        />

        <div className="w-full">
          <FormTextInput
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.password}
            touched={formik.touched.password}
          />
          <CheckBox
            isChecked={showPassword}
            onChecked={() => setShowPassword(!showPassword)}
            label="Lihat Password"
          />
        </div>

        <div className="w-full pt-2">
          <FormButton type="submit" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Logging in..." : "Login"}
          </FormButton>
        </div>
      </form>

      <div className="flex items-center justify-center gap-2 px-4 py-5 bg-[#1a3824]/50">
        <p className="text-sm text-white">Don`t have an account?</p>
        <FormLink href="/register">Register</FormLink>
      </div>
    </div>
  );
};
