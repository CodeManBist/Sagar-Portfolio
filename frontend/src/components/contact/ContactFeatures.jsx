import { Zap, TrendingUp } from "lucide-react";

const ContactFeatures = () => {
  return (
    <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

      <div>
        <div className="flex items-center gap-2 text-[#4F46E5] mb-2">
          <Zap size={16} />
          <span className="text-sm font-semibold">COLLABORATIVE</span>
        </div>
        <p className="text-sm text-[#464555]">
          Working directly with you to solve complex business problems.
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 text-[#4F46E5] mb-2">
          <TrendingUp size={16} />
          <span className="text-sm font-semibold">OUTCOME FOCUSED</span>
        </div>
        <p className="text-sm text-[#464555]">
          Prioritizing measurable business goals over decoration.
        </p>
      </div>

    </div>
  );
};

export default ContactFeatures;