import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS}`,
    },
    params: {
      query: "cars",
    },
  });

  console.log(response);

  return response;
};

export default searchImages;
