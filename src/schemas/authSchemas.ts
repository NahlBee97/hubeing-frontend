import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const RegisterSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(3, "Name must be at least 3 characters ")
    .required("Name required"),
  email: Yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
