"use client";

import { RegisterSchema } from "@/schemas/authSchemas";
import { useFormik } from "formik";
import { FormTextInput } from "../inputs";
import { FormButton } from "../submitButton";
import { FormLink } from "../formLink";
import api from "@/lib/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckBox } from "../checkBox";

interface RegiterFormValues {
  name: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const formik = useFormik<RegiterFormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values: RegiterFormValues) => {
      try {
        await api.post(`/api/auth/register`, values);

        toast.success("Login Successfully, Please Login");

        router.push("/login");
      } catch (error) {
        console.error(error);
        toast.error("Fail to register");
      }
    },
  });

  return (
    <div className="flex flex-col w-full max-w-md bg-[#102316] rounded-xl shadow-2xl overflow-hidden">
      <h2 className="text-white tracking-light text-[28px] font-bold leading-tight text-center pb-3 pt-6">
        Create your account
      </h2>

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center gap-4 w-full px-6 py-4"
      >
        <FormTextInput
          id="name"
          label="Name"
          type="name"
          placeholder="Enter your name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.name}
          touched={formik.touched.name}
        />

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
            {formik.isSubmitting ? "Registering..." : "Register"}
          </FormButton>
        </div>
      </form>

      <div className="flex items-center justify-center gap-2 px-4 py-5 bg-[#1a3824]/50">
        <p className="text-sm text-white">Have an account?</p>{" "}
        <FormLink href="/login">Login</FormLink>
      </div>
    </div>
  );
};
