import Image from "next/image";
import React from "react";

const HeaderLogo = () => {
  return (
    <div className="mb-1">
      <div className={`relative md:w-16 md:h-8 w-12 h-6 dark:hidden`}>
        <Image
          src="/icons/GDD.svg"
          alt="Your SVG file"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={`relative md:w-16 md:h-8 w-12 h-6 hidden dark:block`}>
        <Image
          src="/icons/GDD-dark.svg"
          alt="Your SVG file"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default HeaderLogo;
