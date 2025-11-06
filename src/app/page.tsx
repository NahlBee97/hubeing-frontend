import { HeroSection } from "@/components/home/hero";
import { HowItWorksSection } from "@/components/home/howItWorks";
import { ServicesSection } from "@/components/home/services";
import { TestimonialsSection } from "@/components/home/testimonials";

export default function Home() {
  return (
    
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-4 py-5 sm:px-6 lg:px-8">
          <div className="layout-content-container flex w-full max-w-[960px] flex-1 flex-col">
            <HeroSection />
            <HowItWorksSection />
            <ServicesSection />
            <TestimonialsSection />
          </div>
        </div>
      </div>
  );
}
