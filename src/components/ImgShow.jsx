import clsx from "clsx";

function ImgShow({ image, onSelection, selectedImages }) {
  const isSelected = selectedImages.includes(image.id);
  const buttonClasses = clsx(
    "absolute z-20 w-36 h-12 pl-4 pr-6 shadow-lg py-3 translate-y-1 group-hover:visible group-hover:translate-y-0 flex m-auto inset-0 rounded-xl border hover:bg-slate-700 hover:text-slate-200 transition-all",
    {
      "bg-slate-200 border-slate-900 text-slate-900 invisible": !isSelected,
      "bg-slate-800 border-slate-200 text-slate-200 visible translate-y-0":
        isSelected,
    }
  );

  const containerClasses = clsx("group relative mb-6 hover:cursor-pointer", {
    "mb-6": isSelected,
  });

  const imgClasses = clsx("rounded-xl transition-transform duration-75", {
    "scale-95 opacity-70 border-slate-200 shadow-xl": isSelected,
  });

  const handleClick = () => {
    onSelection(image.id);
  };
  return (
    <div className={containerClasses} onClick={handleClick}>
      <button className={buttonClasses}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mr-1 h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {isSelected ? `Selected` : `Select`}
      </button>
      <img
        className={imgClasses}
        alt={image.alt_description}
        src={image.urls.regular}
      />
    </div>
  );
}

export default ImgShow;
