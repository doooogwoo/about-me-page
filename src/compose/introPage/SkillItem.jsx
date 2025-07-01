import React from "react";

const SkillItem = ({ imageSrc, title, imageAlt = "i am lost", children }) => {
  return (
    <li className="flex flex-col gap-4 md:flex-row md:gap-5">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-[150px] h-[150px] mx-auto md:w-[200px] md:h-[200px] md:mx-0"
      />
      <div className="flex flex-col justify-center gap-2 text-center md:text-left">
        <strong className="text-xl md:text-2xl">{title}</strong>
        <div className="text-sm md:text-base">{children}</div>
      </div>
    </li>
  );
};

export default SkillItem;

