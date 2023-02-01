import { useState } from "react";
import ImgList from "./components/ImgList";
import SearchBar from "./components/SearchBar";
import searchImages from "./utils/unsplash";

function App() {
  const [curPage, setCurPage] = useState(1);
  const [images, setImages] = useState([]);
  const [prevTerm, setPrevTerm] = useState("");

  const handleSubmit = async (term) => {
    const { data } = await searchImages(term, curPage);

    if (term === prevTerm) {
      setImages((prev) => [...prev, ...data.results]);
      setCurPage((prev) => prev + 1);
    } else {
      setImages(data.results);
      setPrevTerm(term);
      setCurPage(1);
    }
  };

  const handleLoadMore = async () => {
    const { data } = await searchImages(prevTerm, curPage + 1);
    setImages((prev) => [...prev, ...data.results]);
    setCurPage((prev) => prev + 1);
  };
  return (
    <main className="container mx-auto relative">
      <header className="mt-8">
        <h1 className="font-headings text-7xl font-bold text-center">
          ImgBundle
        </h1>
      </header>
      <section>
        <SearchBar onSubmit={handleSubmit} images={images} />

        <ImgList images={images} onLoadMore={handleLoadMore} />
      </section>
    </main>
  );
}

export default App;
