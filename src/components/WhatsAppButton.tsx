const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/61461367702"
      className="fixed left-5 bottom-5 w-[60px] h-[60px] z-50 transition-transform duration-200 hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="Contact us on WhatsApp"
        className="w-full h-full"
        width="60"
        height="60"
        loading="lazy"
        decoding="async"
      />
    </a>
  );
};

export default WhatsAppButton; 