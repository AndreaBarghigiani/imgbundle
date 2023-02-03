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
      <p className="mt-10 text-center text-sm font-thin text-slate-400">
        If you read this please understand that the app{" "}
        <strong>is not yet finished</strong>.
        <br />
        <em className="text-xs">
          It already works and have some animations, but I want to add more.
        </em>
      </p>
      <Avatar />
      <main className="container relative mx-auto">
        <header className="mt-32">
          <h1 className="text-center font-headings text-7xl font-bold">
            ImgBundle
          </h1>
        </header>
        <section className="mt-32">
          <SearchBar onSubmit={handleSubmit} />

          <ImgList images={images} onLoadMore={handleLoadMore} />
        </section>
      </main>
    </>
  );
}

export default App;
