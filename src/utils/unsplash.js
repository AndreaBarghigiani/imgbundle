import axios from "axios";
import JSZip from "jszip";

console.log("testing envs from vite", import.meta.env.VITE_UNSPLASH_ACCESS);

const searchImages = async (term, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS}`,
    },
    params: {
      query: term,
      page,
      per_page: 20,
    },
  });

  return response;
};

const makeZip = async (images) => {
  const zip = new JSZip();
  const fileName = `imgbundle-images.zip`;

  const promises = images.map(async (image) => {
    const response = await axios.get(image.src, {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS}`,
      },
      responseType: "arraybuffer",
    });

    const blob = new Blob([response.data], { type: "image/jpeg" });
    zip.file(`${image.name}.jpg`, blob, { binary: true });
  });

  await Promise.all(promises);

  zip.generateAsync({ type: "blob" }).then((content) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};

export { makeZip };

export default searchImages;
