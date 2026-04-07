const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
      
      {/* Icon */}
      <div className="text-[#4F46E5] mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-[16px] font-semibold text-[#0F172A] mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#64748B] leading-relaxed">
        {description}
      </p>

    </div>
  );
};

export default ServiceCard;