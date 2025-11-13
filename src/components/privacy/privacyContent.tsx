import { PolicySection } from "./policySection";

export const PrivacyContent = () => (
  // Use responsive padding: small on mobile, larger on desktop
  <div className="flex flex-1 justify-center py-5 px-4 sm:px-10 md:px-20 lg:px-40">
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#13ec5b] tracking-light text-3xl md:text-[32px] font-bold leading-tight min-w-72">
          Privacy Policy
        </p>
      </div>
      <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
        This Privacy Policy describes how HealthConnect collects, uses, and
        shares your personal information. We are committed to protecting your
        privacy and ensuring the security of your data. By using our services,
        you agree to the terms outlined in this policy.
      </p>

      <PolicySection title="Information We Collect">
        We collect information you provide directly, such as when you create an
        account, schedule appointments, or communicate with us. This may include
        your name, contact details, medical history, and payment information. We
        also collect information automatically, such as your IP address, device
        information, and usage patterns on our platform.
      </PolicySection>

      <PolicySection title="How We Use Your Information">
        We use your information to provide and improve our services, including
        scheduling appointments, communicating with you, and personalizing your
        experience. We may also use your information for research and
        development, marketing, and to comply with legal obligations.
      </PolicySection>

      <PolicySection title="Information Sharing">
        We may share your information with healthcare providers, service
        providers who assist us in operating our platform, and as required by
        law. We do not sell your personal information to third parties.
      </PolicySection>

      <PolicySection title="Data Security">
        We implement security measures to protect your information from
        unauthorized access, use, or disclosure. These measures include
        encryption, access controls, and regular security assessments. However,
        no method of transmission over the internet or electronic storage is
        completely secure.
      </PolicySection>

      <PolicySection title="Your Rights">
        You have the right to access, correct, or delete your personal
        information. You may also have the right to object to or restrict
        certain processing of your information. To exercise these rights, please
        contact us at the email address provided below.
      </PolicySection>

      <PolicySection title="Contact Us">
        If you have any questions or concerns about this Privacy Policy, please
        contact us at privacy@healthconnect.com.
      </PolicySection>
    </div>
  </div>
);