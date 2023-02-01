import { useState } from "react";

function SearchBar({ onSubmit, images }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto my-10">
      <div className="absolute inset-0 bg-gradient-to-b scale-200 from-slate-600 to-slate-800 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-2 sm:rounded-3xl"></div>
      <form
        onSubmit={handleSubmit}
        className="relative px-4 py-8 bg-slate-900 shadow-lg border border-slate-600 sm:rounded-3xl sm:p-14 border-opacity-50"
      >
        <input
          type="text"
          className="rounded-lg max-w-xl w-full text-slate-900"
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
