import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string()
    .matches(/^\+?[0-9\s\-()]{7,15}$/, "Invalid email format")
    .required("Email is required"),
  password: yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters ")
    .required("Name required"),
  email: yup
    .string()
    .matches(/^\+?[0-9\s\-()]{7,15}$/, "Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});