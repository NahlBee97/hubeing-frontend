import { TermsSection } from "./termsSection";

export const TermsContent = () => (
  // Use responsive padding: small on mobile, larger on desktop
  <div className="flex flex-1 justify-center py-5 px-4 sm:px-10 md:px-20 lg:px-40">
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#13ec5b] tracking-light text-3xl md:text-[32px] font-bold leading-tight min-w-72">
          Terms of Service
        </p>
      </div>
      <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
        Welcome to the LocalDoc Appointment App. By accessing or using our
        services, you agree to be bound by these Terms of Service. Please read
        them carefully.
      </p>

      <TermsSection title="1. Acceptance of Terms">
        By using the LocalDoc Appointment App, you agree to comply with and be
        bound by these Terms of Service. If you do not agree to these terms,
        please do not use our services.
      </TermsSection>

      <TermsSection title="2. Description of Service">
        The LocalDoc Appointment App provides a platform for users to schedule
        and manage medical appointments with healthcare providers. We do not
        provide medical advice or services directly.
      </TermsSection>

      <TermsSection title="3. User Responsibilities">
        You are responsible for maintaining the confidentiality of your account
        information and for all activities that occur under your account. You
        agree to provide accurate and complete information when using our
        services.
      </TermsSection>

      <TermsSection title="4. Service Limitations">
        LocalDoc is not responsible for the quality of medical services provided
        by healthcare providers. We do not guarantee the availability of
        appointments or the accuracy of provider information.
      </TermsSection>

      <TermsSection title="5. Modifications to Terms">
        We reserve the right to modify these Terms of Service at any time. Your
        continued use of the app after any changes constitutes your acceptance
        of the new terms.
      </TermsSection>

      <TermsSection title="6. Termination">
        We may terminate or suspend your access to the app at any time, without
        notice, for conduct that we believe violates these Terms of Service or
        is harmful to other users of the app.
      </TermsSection>

      <TermsSection title="7. Governing Law">
        These Terms of Service shall be governed by and construed in accordance
        with the laws of the jurisdiction in which LocalDoc operates, without
        regard to its conflict of law provisions.
      </TermsSection>
    </div>
  </div>
);
