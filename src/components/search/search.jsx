/* eslint-disable react/prop-types */
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ search, setSearch, submitRequest }) => {
  return (
    <div>
      <form onSubmit={submitRequest} className="search">
        <input
          className="search-dictionary"
          type="text"
          placeholder="Search for any word…"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="lg"
          style={{ color: "#a555ed" }}
          className="search-icon"
        />
      </form>
    </div>
  );
};

export default Search;
