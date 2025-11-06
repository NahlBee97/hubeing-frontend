import { RegisterForm } from "@/components/register/RegisterForm";

export default function Register() {
  return (
    <div className="flex h-full grow flex-col">
      <div className="flex flex-1 justify-center py-5 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="flex w-full max-w-[960px] flex-1 flex-col items-center">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
