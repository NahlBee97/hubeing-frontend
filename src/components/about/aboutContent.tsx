import { TeamMemberCard } from "./teamMemberCard";

const teamMembers = [
  {
    name: "Dr. Emily Carter",
    title: "Co-Founder & CEO",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCl00A0-iGYzR-jI18iphJ1oLW8HKr6iUDVIEXEoAC-ZFA9ww18U_WTzpDD8FKfLTWdX1-ateaheDf674ojBIa26NKMa3bPph2Dnbe3OG4Q_dwAiZ4yQxoAeXD6tVI4NenFzI-SYmSpwFlRU0eTfK3h0qbpetfOripBlRg-jkkFzHEcxal5ZwZuiRnOEopbVtW4nMk2gzrfM_dLTDv8yU8rWE-qVnPJ_LIHQvOGLHpumbo03ZzAk1aSteb197fP9SWsre4GIWpcmtbL",
  },
  {
    name: "Dr. HuBeing",
    title: "Co-Founder & CTO",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4favrmBF8mPnkJWc8IDvV1f-uZbCqQGqTY4Cmx4fCkzZPbER91m24KQrZiMLO4ud4TdUzKxSggwJuN7u9sgZgc9tOm8sijYpJ-4V6t2DhVKSvgRII9Vew49xqFf44lMd9ZPachHciwzPZtYpUmJq0AQXBGFoxSWRZ9TFjHqlJcdIdCbnGcAG-2BiEduaaBhYzI2HTiBOtQwV4KqKMXESZ2n-_qJbcBlelWe7y2OEWU0S-xIFHYU8bMx5I-iJ8VYOR2Tig3mtncgx-",
  },
  {
    name: "Dr. Sarah Jones",
    title: "Head of Patient Relations",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWndd3IfErgFGys0QrQaKkIT-K2kJNDr3d-bsx2WzLapQKmokTLzHVqJ63rFl5kEHdc_533v_i7Am-KPSmt_Q9zdzdTQDxH0LIIqaNyo975FQXSwdA6RZHuAPb-jdTkTx-RzMxDJZOuFnpIInmoGwXa14HdFFuFFZVkgjPUCuAqkB8Y9yjGPzWODl6NLL6dv2Sp3wnslbIfiSU1SCPIWd19rRYzSUHAX3Iazu9JzOd56h2NVgXJbZ-K7VHNLh-lmXjLFts4hUryPnJ",
  },
];

export const AboutContent = () => (
  <div className="flex flex-1 justify-center px-4 py-5 md:px-10 lg:px-20">
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <h1 className="text-white tracking-light text-3xl md:text-[32px] font-bold leading-tight min-w-72 mb-2">
        About LocalDoc
      </h1>
      <p className="text-white text-base font-normal leading-normal pb-3 pt-1">
        At LocalDoc, our mission is to connect patients with the best local
        healthcare providers, making healthcare more accessible and convenient
        for everyone. We believe in a patient-centric approach, where technology
        enhances the personal touch of healthcare.
      </p>

      <h2 className="text-white text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        Our Values
      </h2>
      <p className="text-white text-base font-normal leading-normal pb-3 pt-1">
        We are committed to integrity, transparency, and innovation. Our
        platform is built on the principles of trust and reliability, ensuring
        that patients can make informed decisions about their healthcare. We
        strive to continuously improve our services, adapting to the evolving
        needs of our community.
      </p>

      <h2 className="text-white text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        Meet the Team
      </h2>
      {/* This grid layout is already responsive and will adjust columns based on available space */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 pt-4">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            title={member.title}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>

      <h2 className="text-white text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        A Message from Our Founders
      </h2>
      <p className="text-white text-base font-normal leading-normal pb-3 pt-1">
        We started LocalDoc with a simple idea: to make finding and booking a
        doctor as easy as ordering groceries online. We`re passionate about
        leveraging technology to improve healthcare outcomes and patient
        experiences. Thank you for being a part of our journey.
      </p>
      <p className="text-[#90cb9f] text-sm font-normal leading-normal pb-3 pt-1">
        Emily Carter &amp; HuBeing, Co-Founders
      </p>
    </div>
  </div>
);
