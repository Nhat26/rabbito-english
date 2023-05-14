import Image from "next/image";
import React from "react";

const AppLogo = () => {
  return (
    <>
      <div className={`relative w-32 h-32 `}>
        <Image
          src="/icons/logo.svg"
          alt="Your SVG file"
          layout="fill"
          objectFit="contain"
         
        />
      </div>
      <div className={`relative w-32 h-32 `}>
        <Image
          src="/icons/logodark.svg"
          alt="Your SVG file"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </>
  );
};

export default AppLogo;