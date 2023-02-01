import axios from "axios";

const searchImages = async (term, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_2}`,
    },
    params: {
      query: term,
      page,
      per_page: 20,
    },
  });

  return response;
};

export default searchImages;
