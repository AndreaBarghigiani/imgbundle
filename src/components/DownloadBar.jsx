import clsx from "clsx";
import { makeZip } from "../utils/unsplash";

// Icons
import DownArrowIcon from "../assets/icon/down-arrow";
import LoadingIcon from "../assets/icon/loading";
import MinifyIcon from "../assets/icon/minify";
import MagnifyIcon from "../assets/icon/magnify";

function DownloadBar({ images, selectedImages, status, setStatus }) {
  const classes = clsx(
    "fixed inset-x-0 z-50 mx-auto flex h-24 w-1/2 p-2 rounded-t-lg border border-b-0 border-slate-600 bg-slate-800 transition-all",
    {
      "bottom-0 items-center": selectedImages.length > 0 && status !== "minify",
      "-bottom-50": selectedImages.length === 0,
      "-bottom-16 justify-center": status === "minify",
    }
  );

  const handleClick = () => {
    setStatus("pending");
    const requestImages = images
      .filter((item) => selectedImages.includes(item.id))
      .map((item) => {
        return {
          id: item.id,
          src: item.urls.full,
          name: item.alt_description,
        };
      });

    makeZip(requestImages, setStatus);
  };

  const handleCloseClick = () => {
    if (status === "minify") {
      setStatus("idle");
    } else {
      setStatus("minify");
    }
  };

  return (
    <div className={classes}>
      <button
        className="absolute -top-3 right-6 rounded-full border border-slate-500 bg-slate-900 p-0.5 font-semibold text-slate-500 transition-colors hover:border-slate-400 hover:text-slate-400"
        onClick={handleCloseClick}
      >
        {status === "minify" ? (
          <MagnifyIcon bold size="small" />
        ) : (
          <MinifyIcon bold size="small" />
        )}
      </button>

      {status !== "minify" ? (
        <button
          className="group mx-auto flex rounded-full border border-slate-600 bg-slate-600 py-3 pl-4 pr-6 text-slate-300 shadow-lg transition-colors hover:bg-slate-700"
          onClick={handleClick}
        >
          {status === "idle" ? <DownArrowIcon /> : null}

          {status === "pending" ? <LoadingIcon /> : null}

          <span>
            {status === "pending"
              ? `Preparing archive`
              : `Download ${selectedImages.length}`}
          </span>
        </button>
      ) : (
        <span className="text-xs text-slate-400">
          You have{" "}
          <strong>
            {selectedImages.length} image
            {selectedImages.length !== 1 ? "s" : null}
          </strong>{" "}
          awaiting to be downloaded.
        </span>
      )}
    </div>
  );
}

export default DownloadBar;
