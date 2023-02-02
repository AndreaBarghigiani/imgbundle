import clsx from "clsx";
import { useState } from "react";

function ImgShow({ image, onSelection }) {
  const [isSelected, setIsSelected] = useState(false);
  const buttonClasses = clsx({
    "absolute h-12 pl-4 pr-6 shadow-lg py-3 group-hover:visible flex m-auto inset-0 rounded-xl border hover:bg-slate-700 hover:text-slate-200 transition-colors": true,
    "bg-slate-200 border-slate-900 text-slate-900 invisible": !isSelected,
    "bg-slate-800 border-slate-200 text-slate-200 visible": isSelected,
  });

  const handleClick = () => {
    setIsSelected((prev) => !prev);
    onSelection(image.id);
  };
  return (
    <div
      className="relative mb-6 group hover:cursor-pointer"
      onClick={handleClick}
    >
      <img
        className="rounded-xl"
        alt={image.alt_description}
        src={image.urls.regular}
      />
      <button className={buttonClasses}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {isSelected ? `Selected` : `Select`}
      </button>
    </div>
  );
}

export default ImgShow;
