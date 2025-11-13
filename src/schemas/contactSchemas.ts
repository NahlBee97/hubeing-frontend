import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().required("Your name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Your email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});
