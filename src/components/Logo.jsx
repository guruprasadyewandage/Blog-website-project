import React from "react";

function Logo({ width = "170px" }) {
  return (
    <div
      style={{ width }}
      className="flex items-center gap-3 select-none"
    >
      {/* Logo Icon */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 4.5C5 3.67 5.67 3 6.5 3H18C18.55 3 19 3.45 19 4V20C19 20.55 18.55 21 18 21H6.5C5.67 21 5 20.33 5 19.5V4.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />

          <path
            d="M8 7H16M8 11H16M8 15H13"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Website Name */}
      <div className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight text-slate-900">
          Blog Website
        </span>

        <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-slate-400">
          Write. Share. Inspire.
        </span>
      </div>
    </div>
  );
}

export default Logo;