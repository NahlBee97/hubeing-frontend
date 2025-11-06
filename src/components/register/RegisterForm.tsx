"use client"

import { RegisterSchema } from "@/schemas/authSchemas";
import { useFormik, FormikHelpers } from "formik";
import { FormTextInput } from "../inputs";
import { FormButton } from "../submitButton";
import { FormLink } from "../formLink";

interface RegiterFormValues {
  name: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const formik = useFormik<RegiterFormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (
      values: RegiterFormValues,
      { setSubmitting }: FormikHelpers<RegiterFormValues> // Use FormikHelpers
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
