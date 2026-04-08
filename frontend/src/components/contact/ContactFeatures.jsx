import { Zap, TrendingUp } from "lucide-react";

const ContactFeatures = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

      <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-100 hover:border-primary-purple/20 transition">
        <div className="flex items-center gap-2 text-primary-purple mb-3">
          <Zap size={20} />
          <span className="text-sm font-bold uppercase tracking-wide">Collaborative</span>
        </div>
        <p className="text-sm text-neutral-600">
          Working directly with you to solve complex business problems.
        </p>
      </div>

      <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-100 hover:border-primary-teal/20 transition">
        <div className="flex items-center gap-2 text-primary-teal mb-3">
          <TrendingUp size={20} />
          <span className="text-sm font-bold uppercase tracking-wide">Outcome Focused</span>
        </div>
        <p className="text-sm text-neutral-600">
          Prioritizing measurable business goals over decoration.
        </p>
      </div>

    </div>
  );
};

export default ContactFeatures;
