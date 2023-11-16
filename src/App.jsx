import "./index.css";
import Navbar from "./components/navbar/navbar";
import Search from "./components/search/search";
import Result from "./components/result/result";
import { useEffect, useState } from "react";
import "ldrs/metronome";

// Default values shown

const App = () => {
  const [font, setFont] = useState("Sans-Serif");
  const [search, setSearch] = useState("");
  const [word, setWord] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  function updateWord() {}

  useEffect(
    function () {
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
      }

      searchDictionary();

      return function () {
        controller.abort();
      };
    },
    [search]
  );

  return (
    <div className="app">
      <Navbar font={font} setFont={setFont} />

      <Search search={search} setSearch={setSearch} />

      {isLoading ? (
        <l-metronome
          class="loading"
          size="40"
          speed="1.6"
          color="#a445ed"
        ></l-metronome>
      ) : (
        <Result word={word} error={error} />
      )}
    </div>
  );
};

export default App;
