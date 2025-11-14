"use client";

import { useFormik } from "formik";
import { FormTextInput } from "../inputs";
import { FormButton } from "../submitButton";
import { ProfileSchema } from "@/schemas/profileSchemas";
import toast from "react-hot-toast";
import api from "@/lib/axios";
import { useAuthStore } from "@/stores/useAuthStore";

interface SettingsFormValues {
  name: string;
  email: string;
}

export const ProfileForm = () => {
  const { user } = useAuthStore();
  const formik = useFormik<SettingsFormValues>({
    enableReinitialize: true,
    initialValues: {
      name: user ? user.name : "",
      email: user ? user.email : "",
    },
    validationSchema: ProfileSchema,
    onSubmit: async (values) => {
      try {
        await api.post(`/api/users`, { ...values });
        toast.success("Edit profile success");
      } catch (error) {
        console.error("Fail to edit profile: " + error);
        toast.error("Fail to edit profile");
      }
    },
  });

  return (
    <div className="layout-content-container flex flex-col max-w-[920px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#13ec5b] tracking-light text-3xl md:text-[32px] font-bold leading-tight min-w-72">
          Profile Settings
        </p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="p-4">
          <FormTextInput
            label="Name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : undefined
            }
          />
          <FormTextInput
            label="Email"
            type="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : undefined
            }
          />
        </div>

        <div className="flex px-4 py-3 justify-start">
          <FormButton type="submit" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Saving..." : "Save Changes"}
          </FormButton>
        </div>
      </form>

      <div className="flex px-4 py-3 justify-start">
        <button
          type="button"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#22492c] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80"
        >
          <span className="truncate">Logout</span>
        </button>
      </div>
    </div>
  );
};
