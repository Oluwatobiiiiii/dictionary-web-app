import "./index.css";
import Navbar from "./components/navbar/navbar";
import Search from "./components/search/search";
import { useState } from "react";
import "ldrs/metronome";
import Dictionary from "./components/dictionary/dictionary";
import CodingNinja from "./components/coding-ninja 🥷🏾/coding-ninja";

// Default values shown

const App = () => {
  const [font, setFont] = useState("Sans-Serif");
  const [search, setSearch] = useState("");
  const [word, setWord] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  function submitRequest(e) {
    e.preventDefault();
    const controller = new AbortController();
    async function searchDictionary() {
      setLoading(true);
      try {
        const data = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`,
          { signal: controller.abort() }
        );
        const result = await data.json();
        setWord(result);
      } catch (Error) {
        setError(Error);
        console.log(error);
      } finally {
        setLoading(false);
      }

      if (search.length < 2) {
        setWord([]);
        setError("");
      }
    }

    searchDictionary();

    return function () {
      controller.abort();
    };
  }
  return (
    <div className="app">
      <Navbar font={font} setFont={setFont} />

      <Search
        search={search}
        submitRequest={submitRequest}
        setSearch={setSearch}
      />

      {isLoading ? (
        <l-metronome
          class="loading"
          size="40"
          speed="1.6"
          color="#a445ed"
        ></l-metronome>
      ) : (
        <Dictionary word={word} error={error} />
      )}
      <CodingNinja />
    </div>
  );
};

export default App;
