import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="relative my-10 py-2 sm:mx-auto sm:max-w-2xl">
      <div className="absolute inset-0 -skew-y-12 transform bg-gradient-to-b from-slate-600 to-slate-800 shadow-lg sm:-rotate-2 sm:skew-y-0 sm:rounded-3xl"></div>
      <form
        onSubmit={handleSubmit}
        className="relative border border-slate-600 border-opacity-50 bg-slate-900 px-4 py-8 shadow-lg sm:rounded-3xl sm:p-14"
      >
        <input
          type="text"
          className="w-full max-w-xl rounded-lg text-slate-900"
          value={term}
          onChange={handleChange}
          placeholder="Start typing..."
        />
        <span className="text-xs text-slate-400">
          Keep pressing Enter to load more, or scrool to the bottom for the
          fancy button
        </span>
      </form>
    </div>
  );
}

export default SearchBar;
