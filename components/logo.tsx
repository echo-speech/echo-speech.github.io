import Image from "next/image";
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      {/* SVG Image */}
      <Image
        src="/logo/jo_logo.svg"
        alt="Logo"
        className="size-8 object-contain"
        height={32}
        width={32}
      />
      {/* Text */}
      <span className="text-lg font-bold text-zinc-800 dark:text-primary-white">
        Templato
      </span>
    </div>
  );
};

export default Logo;
