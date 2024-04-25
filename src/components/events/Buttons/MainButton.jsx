import React from "react";

const MainButton = ({
  title,
  active = false,
  className = "",
  style = {},
}) => {
  return (
      <div
        className={`flex items-center justify-center gap-2 px-2 pt-2 rounded-2xl pointer-events-auto border border-lightWhite hover:bg-lightBlack ${active ? " bg-lightWhite" : "bg-transparent"} ${className}`}
        style={{
          ...style,
        }}
      >
        <div className="flex w-[90px] pb-1 mdl:w-[140px] justify-center items-center text-white text-xs mdl:text-base font-medium leading-none">
          {title}
        </div>
      </div>
  );
};

export default MainButton;
