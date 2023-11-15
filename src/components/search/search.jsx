/* eslint-disable react/prop-types */
import "./search.css";

const Search = ({ search, setSearch }) => {
  function onClick(e) {
    e.preventDefault();
  }
  return (
    <div className="search">
      <form onSubmit={onClick}>
        <input
          className="search-dictionary"
          type="text"
          placeholder="Search for any word…"
          onChange={(e) => onClick(setSearch(e.target.value))}
          value={search}
        />
      </form>
    </div>
  );
};

export default Search;
