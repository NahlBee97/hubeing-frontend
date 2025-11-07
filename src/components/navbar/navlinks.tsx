import Link from "next/link";

export const NavLinks = ({ mobile = false, isLoggedIn = true }) => {
  const loggedInLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Book Appointment", link: "/book-appointment"},
    { name: "My Appointment", link: "/appointment"},
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
          className="text-white font-medium leading-normal hover:text-gray-300"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
