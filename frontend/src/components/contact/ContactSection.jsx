import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactFeatures from "./ContactFeatures";
import ContactForm from "./ContactForm";
import { SectionContainer } from "../ui";

const ContactSection = () => {
  return (
    <SectionContainer bgVariant="white" as="section" className="relative overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-teal/5 rounded-full blur-3xl -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-8">
          <ContactHero />
          
          <div className="border-t border-neutral-200" />
          
          <ContactInfo />
          <ContactFeatures />
        </div>

        {/* RIGHT SIDE */}
        <div className="mt-8 lg:mt-0">
          <ContactForm />
        </div>

      </div>

    </SectionContainer>
  );
};

export default ContactSection;
