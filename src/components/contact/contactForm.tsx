"use client";

import { useFormik } from "formik";
import { FormTextarea, FormTextInput } from "../inputs";
import { contactSchema } from "@/schemas/contactSchemas";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm = () => {
  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values, { resetForm }) => {
      // Handle form submission
      console.log("Contact Form Data:", values);
      // Using a custom modal or message is preferred over alert
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="p-4 space-y-2">
        <FormTextInput
          id="name"
          label="Name"
          type="text"
          placeholder=""
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
          placeholder=""
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
        />
      </div>
      <FormTextarea
        name="message"
        placeholder="Your Message"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.message && formik.errors.message
            ? formik.errors.message
            : undefined
        }
      />
      <div className="flex max-w-[480px] px-4 py-3 justify-end">
        <button
          type="submit"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#4cf676] text-[#102315] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80"
        >
          <span className="truncate">Send Message</span>
        </button>
      </div>
    </form>
  );
};
