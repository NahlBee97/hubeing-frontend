"use client"

interface props {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string; // Formik value
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Formik handler
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void; // Formik handler
  error?: string; // Formik error
  touched?: boolean; // Formik touched state
}

export const FormTextInput = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
}: props) => (
  <div className="w-full">
    <label htmlFor={id} className="flex flex-col w-full">
      <p className="text-white text-base font-medium leading-normal pb-2">
        {label}
      </p>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#22492f] focus:border-none h-14 placeholder:text-[#90cba4] p-4 text-base font-normal leading-normal ${
          touched && error
            ? "ring-2 ring-red-500" // Add red ring on error
            : "focus:ring-2 focus:ring-[#0df259]" // Add green focus ring
        }`}
      />
    </label>
    {touched && error && (
      <p className="text-red-400 text-xs mt-1 px-1">{error}</p>
    )}
  </div>
);