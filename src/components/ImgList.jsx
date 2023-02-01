import { useState } from "react";
import ImgShow from "./ImgShow";

function ImgList({ images, onLoadMore }) {
  const [selectedImages, setSelectedImages] = useState([]);
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
  return (
    <>
      <div className="columns-3">
        {images.map((image) => (
          <ImgShow image={image} key={image.id} onSelection={handleSelection} />
        ))}
      </div>

      {images.length ? (
        <button
          className="border-slate-200 border text-slate-200 rounded-xl border-opacity-50 px-4 py-3 mx-auto block mt-8"
          onClick={handleClick}
        >
          Load more
        </button>
      ) : null}

      {selectedImages.length ? (
        <button className="fixed top-1/2 left-2">
          Download {selectedImages.length}
        </button>
      ) : null}
    </>
  );
}

export default ImgList;
