const DISCOVERY_CALL_URL =
  import.meta.env.VITE_DISCOVERY_CALL_URL || "/contact#contact-form";

const WHATSAPP_URL =
  import.meta.env.VITE_WHATSAPP_URL || "https://wa.me/919999999999?text=Hi%20I%20want%20to%20discuss%20a%20project";

const buildWhatsAppLeadUrl = ({ name, email, message }) => {
  const matchedNumber = WHATSAPP_URL.match(/wa\.me\/(\d+)/);

  if (!matchedNumber) {
    return WHATSAPP_URL;
  }

  const text = [
    "New portfolio inquiry",
    `Name: ${name}`,
    `Email: ${email}`,
    `Message: ${message}`,
  ].join("\n");

  return `https://wa.me/${matchedNumber[1]}?text=${encodeURIComponent(text)}`;
};

export { DISCOVERY_CALL_URL, WHATSAPP_URL, buildWhatsAppLeadUrl };