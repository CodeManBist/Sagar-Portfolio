const ContactInfo = () => {
  return (
    <div className="mt-6 sm:mt-8 flex items-center gap-4">
      <img
        src="/profile.jpeg"
        alt="Sagar Clarity"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="text-[#001C37] font-semibold">Sagar Clarity</h4>
        <p className="text-sm text-[#464555]">
          Design Partner & Product Strategist
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;