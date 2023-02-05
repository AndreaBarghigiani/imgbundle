import clsx from "clsx";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImgShow from "./ImgShow";
import DownloadBar from "./DownloadBar";

function ImgList({ images, onLoadMore }) {
  const [status, setStatus] = useState("idle");
  const [selectedImages, setSelectedImages] = useState([]);
  const loadMoreClasses = clsx({
    "border-slate-200 border text-slate-200 rounded-xl border-opacity-50 px-4 py-3 mx-auto block mt-8": true,
    "mb-36": selectedImages.length > 0,
  });

  useEffect(() => {
    if (status === "downloaded") {
      setStatus("idle");
      setSelectedImages([]);
    }
  }, [status]);

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

  return (
    <>
      <div className="columns-3">
        {images.map((image, i) => (
          <motion.div
            key={image.id}
            initial={{
              opacity: 0,
              translateY: -50,
            }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <ImgShow
              image={image}
              onSelection={handleSelection}
              selectedImages={selectedImages}
            />
          </motion.div>
        ))}
      </div>

      {images.length ? (
        <button className={loadMoreClasses} onClick={handleClick}>
          Load more
        </button>
      ) : null}

      {selectedImages.length > 0 ? (
        <DownloadBar
          images={images}
          selectedImages={selectedImages}
          status={status}
          setStatus={setStatus}
        />
      ) : null}
    </>
  );
}

export default ImgList;
