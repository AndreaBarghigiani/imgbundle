import clsx from "clsx";
import { makeZip } from "../utils/unsplash";
import { useState } from "react";
import ImgShow from "./ImgShow";

function ImgList({ images, onLoadMore }) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const loadMoreClasses = clsx({
    "border-slate-200 border text-slate-200 rounded-xl border-opacity-50 px-4 py-3 mx-auto block mt-8": true,
    "mb-36": selectedImages.length > 0,
  });

  const handleClick = (e) => {
    e.preventDefault();

    onLoadMore();
  };

  const handleSelection = (id) => {
    const selected = [...selectedImages];

    if (selected.includes(id)) {
      selected.splice(selected.indexOf(id), 1);
      setSelectedImages(selected);
    } else {
      setSelectedImages((prev) => [...prev, id]);
    }
  };

  const handleDownload = () => {
    const requestImages = images
      .filter((item) => selectedImages.includes(item.id))
      .map((item) => {
        return {
          id: item.id,
          src: item.urls.full,
          name: item.alt_description,
        };
      });

    setIsLoading(true);
    makeZip(requestImages, setIsLoading);
  };

  return (
    <>
      <div className="columns-3">
        {images.map((image) => (
          <ImgShow image={image} key={image.id} onSelection={handleSelection} />
        ))}
      </div>

      {images.length ? (
        <button className={loadMoreClasses} onClick={handleClick}>
          Load more
        </button>
      ) : null}

      {selectedImages.length ? (
        <div className="fixed inset-x-0 bottom-0 z-50 mx-auto flex h-24 w-1/2 items-center rounded-t-lg border border-b-0 border-slate-600 bg-slate-800">
          <button
            className="group mx-auto block flex rounded-full border border-slate-600 bg-slate-600 py-3 pl-4 pr-6 text-slate-300 shadow-lg transition-colors hover:bg-slate-700"
            onClick={handleDownload}
          >
            {isLoading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40px"
                height="40px"
                viewBox="0 0 50 50"
                className="mr-2 h-6 w-6 shrink-0"
              >
                <path
                  fill="#e2e8f0"
                  d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
                >
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            ) : (
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
            )}
            <span>
              {isLoading
                ? `Preparing archive`
                : `Download ${selectedImages.length}`}
            </span>
          </button>
        </div>
      ) : null}
    </>
  );
}

export default ImgList;
