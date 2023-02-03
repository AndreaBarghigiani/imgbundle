import { useState } from "react";
import clsx from "clsx";
import { makeZip } from "../utils/unsplash";

function DownloadBar({ images, selectedImages, status, setStatus }) {
  const classes = clsx(
    "fixed -bottom-50 inset-x-0 z-50 mx-auto flex h-24 w-1/2 items-center rounded-t-lg border border-b-0 border-slate-600 bg-slate-800",
    {
      "bottom-0": selectedImages.length > 0,
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

  return (
    <div className={classes}>
      <button
        className="group mx-auto block flex rounded-full border border-slate-600 bg-slate-600 py-3 pl-4 pr-6 text-slate-300 shadow-lg transition-colors hover:bg-slate-700"
        onClick={handleClick}
      >
        {status === "idle" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 h-6 w-6 shrink-0 group-hover:animate-pulse"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : null}

        {status === "pending" ? (
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6 shrink-0"
          >
            <defs>
              <linearGradient
                x1="8.042%"
                y1="0%"
                x2="65.682%"
                y2="23.865%"
                id="a"
              >
                <stop stopColor="#e2e8f0" stopOpacity="0" offset="0%" />
                <stop stopColor="#e2e8f0" stopOpacity=".631" offset="63.146%" />
                <stop stopColor="#e2e8f0" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)">
                <path
                  d="M36 18c0-9.94-8.06-18-18-18"
                  id="Oval-2"
                  stroke="url(#a)"
                  stroke-width="2"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite"
                  />
                </path>
                <circle fill="#e2e8f0" cx="36" cy="18" r="1">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          </svg>
        ) : null}
        <span>
          {status === "pending"
            ? `Preparing archive`
            : `Download ${selectedImages.length}`}
        </span>
      </button>
    </div>
  );
}

export default DownloadBar;
