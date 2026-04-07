import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactFeatures from "./ContactFeatures";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="bg-[#F8FAFC] px-6 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

        {/* LEFT */}
        <div>
          <ContactHero />
          
          <div className="border-t border-[#E2E8F0] my-6 sm:my-8"></div>
          
          <ContactInfo />
          <ContactFeatures />
        </div>

        {/* RIGHT */}
        <ContactForm />

      </div>

    </section>
  );
};

export default ContactSection;