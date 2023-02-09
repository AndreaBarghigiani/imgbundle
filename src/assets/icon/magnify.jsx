import clsx from "clsx";

function MagnifyIcon({ size = "normal", bold, className }) {
  const iconClasses = clsx(className, {
    "h-4 w-4": size === "small",
    "h-6 w-6": size === "normal",
    "h-8 w-8": size === "big",
    "stroke-2": bold,
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}

export default MagnifyIcon;
