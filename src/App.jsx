import { useState } from "react";

import ImgList from "./components/ImgList";
import SearchBar from "./components/SearchBar";
import Avatar from "./components/Avatar";

import searchImages from "./utils/unsplash";

function App() {
  const [curPage, setCurPage] = useState(1);
  const [images, setImages] = useState([]);
  const [prevTerm, setPrevTerm] = useState("");

  const handleSubmit = async (term) => {
    const { data } = await searchImages(term, curPage);

    if (term === prevTerm) {
      handleLoadMore();
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
    <>
      <Avatar />
      <main className="container relative mx-auto">
        <header className="my-32 text-center">
          <h1 className=" font-headings text-7xl font-bold">ImgBundle</h1>
          <p className="mt-4 text-sm text-slate-400">
            Find your images and bundle in a single <code>.zip</code> archive.
          </p>
        </header>
        <section className="my-32">
          <SearchBar onSubmit={handleSubmit} />

          <ImgList images={images} onLoadMore={handleLoadMore} />
        </section>
      </main>
    </>
  );
}

export default App;
