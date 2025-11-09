import Link from "next/link";

interface props {
  mobile: boolean;
  isLoggedIn: boolean;
  onClickLink: () => void
}

export const NavLinks = ({ mobile = false, isLoggedIn = true, onClickLink }: props ) => {
  const loggedInLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Book Appointment", link: "/booking"},
    { name: "My Appointment", link: "/appointments"},
  ];

  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
  ];


  return (
    <div
      className={`flex items-center ${
        mobile ? "flex-col gap-6 text-lg" : "flex-row gap-9 text-sm"
      }`}
    >
      {(isLoggedIn ? loggedInLinks : links).map((link) => (
        <Link
          key={link.name}
          href={link.link}
          onClick={onClickLink}
          className="text-white font-medium leading-normal hover:text-gray-300"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
