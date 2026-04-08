import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactFeatures from "./ContactFeatures";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contact-form" className="page-section page-section-muted">

      <div className="section-wrap grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">

        {/* LEFT */}
        <div>
          <ContactHero />
          
          <div className="my-6 border-t border-slate-200 sm:my-8"></div>
          
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