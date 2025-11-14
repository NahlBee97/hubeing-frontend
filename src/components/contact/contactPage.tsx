import { ContactForm } from "./contactForm";
import { ContactInfo } from "./contactInfo";

export const ContactUsPage = () => (
  // Use responsive padding
  <div className="flex flex-1 justify-center py-5 px-4 sm:px-10 md:px-20 lg:px-40">
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#13ec5b] tracking-light text-3xl md:text-[32px] font-bold leading-tight">
            Contact Us
          </p>
          <p className="text-[#90cb9f] text-sm font-normal leading-normal">
            We`re here to help. Reach out to us with any questions or concerns.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  </div>
);
