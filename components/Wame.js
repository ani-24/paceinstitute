import Image from "next/image";

const Wame = () => {
  return (
    <div className="fixed left-5 bottom-5 z-50 animate-moveDown">
      <Image
        src="/whatsapp-logo.svg"
        alt="Whatsapp us"
        height={50}
        width={50}
      />
    </div>
  );
};

export default Wame;
