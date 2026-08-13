import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  {
    label,
    type = "text",
    className = "",
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          className="mb-2 block text-sm font-semibold text-slate-700"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <input
        id={id}
        ref={ref}
        type={type}
        className={`
          w-full
          rounded-xl
          border
          border-slate-200
          bg-white
          px-4
          py-3
          text-sm
          text-slate-900
          outline-none
          transition-all
          placeholder:text-slate-400
          hover:border-slate-300
          focus:border-indigo-500
          focus:ring-4
          focus:ring-indigo-100
          ${className}
        `}
        {...props}
      />
    </div>
  );
});

export default Input;