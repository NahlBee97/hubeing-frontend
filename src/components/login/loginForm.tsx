"use client";

import { loginSchema } from "@/schemas/authSchemas";
import { useFormik, FormikHelpers } from "formik";
import { FormTextInput } from "../inputs";
import { FormButton } from "../submitButton";
import { FormLink } from "../formLink";

interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (
      values: LoginFormValues,
      { setSubmitting }: FormikHelpers<LoginFormValues> // Use FormikHelpers
    ) => {
      console.log(
        `Logging in with email: ${values.email} and Password: ${values.password}`
      );
      setTimeout(() => {
        setSubmitting(false);
        console.log("Login successful (simulated)!");
      }, 1000);
    },
  });

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

        <FormTextInput
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password}
        />

        <div className="w-full pt-2">
          <FormButton type="submit" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Logging in..." : "Login"}
          </FormButton>
        </div>
      </form>

      <div className="flex flex-col items-center gap-3 px-4 py-5 bg-[#1a3824]/50">
        <div className="flex items-center justify-center gap-2">
          <p className="text-sm text-white">Don`t have an account?</p>
          <FormLink href="/register">Register</FormLink>
        </div>
        <FormLink href="/admin-login">Admin Login</FormLink>
      </div>
    </div>
  );
};
