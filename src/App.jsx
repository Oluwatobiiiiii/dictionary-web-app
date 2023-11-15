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
  const [word, setWord] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  useEffect(
    function () {
      async function searchDictionary() {
        try {
          const data = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
          );
          const result = await data.json();
          console.log(result);
          setWord(result);
        } catch (Error) {
          console.error(Error);
          setError(Error);
        }
      }

      searchDictionary();
    },
    [search]
  );

  return (
    <div className="app">
      <Navbar font={font} setFont={setFont} />

      <Search search={search} setSearch={setSearch} />

      <l-metronome size="40" speed="1.6" color="black"></l-metronome>

      <Result />
    </div>
  );
};

export default App;
