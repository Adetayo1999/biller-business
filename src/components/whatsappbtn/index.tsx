import WhatsAppSvg from "@/assets/WhatsAppSvg";

const WhatsAppBtn = () => {
  return (
    <button type="button" className="fixed bottom-4 right-4 z-[88] ">
      <a target="_blank" href="https://wa.me/+447453835529">
        <WhatsAppSvg width={50} height={50} />
      </a>
    </button>
  );
};

export default WhatsAppBtn;
