const WHATSAPP_NUMBER = "919341551773";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello BK Agarwal & Co,\n\nI visited your website and would like to enquire about your services. Could you please get in touch with me?\n\nThank you."
);

export default function WhatsappCTA() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-8 h-8"
        fill="white"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.477 2.027 7.782L0 32l8.438-2.012A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.77-1.853l-.485-.288-5.01 1.195 1.234-4.877-.317-.502A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.352-1.16-2.717-1.292-.364-.133-.629-.199-.894.199-.265.398-1.027 1.292-1.259 1.558-.232.265-.464.298-.862.1-.398-.2-1.681-.62-3.202-1.977-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.133-.265.066-.498-.033-.697-.1-.199-.894-2.154-1.225-2.95-.322-.774-.65-.669-.894-.681l-.762-.013c-.265 0-.696.1-1.06.498-.364.398-1.391 1.359-1.391 3.313 0 1.955 1.424 3.843 1.623 4.109.199.265 2.803 4.278 6.79 5.997.949.41 1.69.655 2.267.839.953.303 1.82.26 2.505.158.764-.114 2.352-.962 2.684-1.89.332-.928.332-1.724.232-1.89-.099-.166-.364-.265-.762-.464z" />
      </svg>
    </a>
  );
}
