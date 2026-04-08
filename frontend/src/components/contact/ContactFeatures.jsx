import { Zap, TrendingUp } from "lucide-react";

const ContactFeatures = () => {
  return (
    <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

      <div>
        <div className="mb-2 flex items-center gap-2 text-indigo-600">
          <Zap size={16} />
          <span className="text-sm font-semibold">COLLABORATIVE</span>
        </div>
        <p className="text-sm text-slate-600">
          Working directly with you to solve complex business problems.
        </p>
      </div>

      <div>
        <div className="mb-2 flex items-center gap-2 text-indigo-600">
          <TrendingUp size={16} />
          <span className="text-sm font-semibold">OUTCOME FOCUSED</span>
        </div>
        <p className="text-sm text-slate-600">
          Prioritizing measurable business goals over decoration.
        </p>
      </div>

    </div>
  );
};

export default ContactFeatures;