import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-indigo-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-5
        py-2.5
        text-sm
        font-semibold
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-lg
        active:translate-y-0
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${bgColor}
        ${textColor}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}