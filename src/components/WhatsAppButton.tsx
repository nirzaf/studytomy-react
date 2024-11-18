const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/61461367702" 
      className="fixed left-5 bottom-5 w-[60px] h-[60px] z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp"
        className="w-full h-full"
      />
    </a>
  );
};

export default WhatsAppButton; 