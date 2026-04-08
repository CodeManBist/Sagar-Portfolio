import { Calendar, MessageCircle, Send } from "lucide-react";
import { Button, Badge } from "../ui";
import { useState } from "react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="w-full">

      {/* Form Card */}
      <div className="bg-white rounded-xl border border-neutral-100 shadow-lg hover:shadow-xl transition-all duration-300 p-8 w-full">

        {/* Form Title */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-neutral-900 mb-2">
            Get In Touch
          </h3>
          <p className="text-sm text-neutral-600">
            Fill out the form below and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder:text-neutral-500
              rounded-lg px-4 py-3 text-sm 
              focus:border-primary-purple focus:ring-2 focus:ring-primary-purple/20
              hover:border-neutral-300
              outline-none transition-all duration-200"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder:text-neutral-500
              rounded-lg px-4 py-3 text-sm 
              focus:border-primary-purple focus:ring-2 focus:ring-primary-purple/20
              hover:border-neutral-300
              outline-none transition-all duration-200"
            />

          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Project Type (e.g., Website, Landing Page, Dashboard)"
            className="w-full border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder:text-neutral-500
            rounded-lg px-4 py-3 text-sm 
            focus:border-primary-purple focus:ring-2 focus:ring-primary-purple/20
            hover:border-neutral-300
            outline-none transition-all duration-200"
          />

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Tell me about your project, budget, and timeline..."
            className="w-full border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder:text-neutral-500
            rounded-lg px-4 py-3 text-sm 
            focus:border-primary-purple focus:ring-2 focus:ring-primary-purple/20
            hover:border-neutral-300
            outline-none transition-all duration-200 resize-none"
          />

          {/* Submit Button */}
          <Button 
            variant="primary" 
            size="lg"
            className="w-full group flex items-center justify-center gap-2"
            disabled={isSubmitting}
            loading={isSubmitting}
          >
            Send Message
            <Send className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Button>

        </form>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-neutral-100" />
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
            Or Connect
          </p>
          <div className="flex-1 h-px bg-neutral-100" />
        </div>

        {/* Alternative Contact Methods */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <a 
            href="#" 
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 text-neutral-700 hover:border-primary-purple hover:text-primary-purple transition-colors"
          >
            <Calendar size={18} />
            <span className="text-sm font-medium">Schedule Call</span>
          </a>

          <a 
            href="#" 
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 text-neutral-700 hover:border-primary-teal hover:text-primary-teal transition-colors"
          >
            <MessageCircle size={18} />
            <span className="text-sm font-medium">WhatsApp</span>
          </a>

        </div>

      </div>

      {/* Status Badge */}
      <div className="flex justify-center items-center mt-6">
        <Badge color="success" variant="light" size="md" icon={<span className="w-2 h-2 bg-green-500 rounded-full inline-block" />}>
          Available for new projects
        </Badge>
      </div>

    </div>
  );
};

export default ContactForm;
