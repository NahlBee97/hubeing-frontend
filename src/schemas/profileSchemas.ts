import * as Yup from "yup";

export const ProfileSchema = Yup.object().shape({
  name: Yup.string().min(3, "Name must be at least 3 characters ").optional(),
  email: Yup.string().email("Invalid email format").optional(),
});
