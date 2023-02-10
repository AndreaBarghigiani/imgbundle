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
      <div className="mx-auto mt-10 max-w-xl rounded-lg border border-slate-700 bg-slate-800 p-4 text-center text-sm font-thin text-slate-400 shadow">
        <p>
          If you read this please understand that the app{" "}
          <strong>is not yet finished</strong>.
          <br />
          <em className="text-xs">
            It already works and have some animations, but I want to add more.
            Add your ideas to{" "}
            <a
              className="not-italic underline"
              href="https://github.com/AndreaBarghigiani/imgbundle/issues"
              target="_blank"
            >
              GitHub
            </a>
            .
          </em>
        </p>
      </div>
      <Avatar />
      <main className="container relative mx-auto">
        <header className="my-32 text-center">
          <h1 className=" font-headings text-7xl font-bold">ImgBundle</h1>
          <p className="mt-4 text-slate-400">
            Revolutionize the way you search and download images, in a{" "}
            <code>.zip</code>
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
