import clsx from "clsx";
import { makeZip } from "../utils/unsplash";
import { useState } from "react";
import ImgShow from "./ImgShow";

function ImgList({ images, onLoadMore }) {
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
    console.log(`this is id`, id);
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

    makeZip(requestImages);
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
        <div className="fixed flex items-center bottom-0 h-24 w-1/2 inset-x-0 mx-auto bg-slate-800 rounded-t-lg border border-slate-600">
          <button
            className="mx-auto block bg-slate-600 transition-colors text-slate-300 px-6 py-3 rounded-full border border-slate-600 shadow-lg hover:bg-slate-700"
            onClick={handleDownload}
          >
            Download {selectedImages.length}
          </button>
        </div>
      ) : null}
    </>
  );
}

export default ImgList;
