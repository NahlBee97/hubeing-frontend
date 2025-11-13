import { ProfileForm } from "./profileForm";
import { ProfileImage } from "./profileImage";

export const ProfilePage = () => (
  // Stacks vertically on mobile, switches to horizontal on large screens
  <div className="flex flex-col lg:flex-row flex-1 justify-center gap-1 py-5 px-4 sm:px-6">
    <ProfileForm />
    <ProfileImage />
  </div>
);