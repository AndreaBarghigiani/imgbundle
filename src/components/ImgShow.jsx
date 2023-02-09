import clsx from "clsx";

// Icons
import CheckIcon from "../assets/icon/check";

function ImgShow({ image, onSelection, selectedImages }) {
  const isSelected = selectedImages.includes(image.id);
  const buttonClasses = clsx(
    "absolute z-20 w-36 h-12 pl-4 pr-6 justify-center shadow-lg py-3 translate-y-1 group-hover:visible group-hover:translate-y-0 flex m-auto inset-0 rounded-xl border hover:bg-slate-700 hover:text-slate-200 transition-all",
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
        <CheckIcon className="mr-1" />
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
