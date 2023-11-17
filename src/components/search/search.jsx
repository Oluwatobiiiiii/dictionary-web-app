/* eslint-disable react/prop-types */
import "./search.css";

const Search = ({ search, setSearch, submitRequest }) => {
  return (
    <div className="search">
      <form onSubmit={submitRequest}>
        <input
          className="search-dictionary"
          type="text"
          placeholder="Search for any word…"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
    </div>
  );
};

export default Search;
