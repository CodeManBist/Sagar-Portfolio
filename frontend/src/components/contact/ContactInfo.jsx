const ContactInfo = () => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-br from-primary-purple/5 to-primary-teal/5 border border-primary-purple/10">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-purple to-primary-teal flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
        SC
      </div>
      <div>
        <h4 className="text-neutral-900 font-semibold">Sagar Clarity</h4>
        <p className="text-sm text-neutral-600">
          MERN Stack Developer & Technical Partner
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
