import "./index.css";
import Navbar from "./components/navbar/navbar";
import Search from "./components/search/search";
import { useState } from "react";
import "ldrs/metronome";
import Dictionary from "./components/dictionary/dictionary";
import Error from "./components/error/error";
import CodingNinja from "./components/coding-ninja 🥷🏾/coding-ninja";

const App = () => {
  const [font, setFont] = useState("Sans-Serif");
  const [search, setSearch] = useState("");
  const [word, setWord] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const ToggleTheme = (e) => {
    if (e.target.checked) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  setLightMode();

  function submitRequest(e) {
    e.preventDefault();
    const controller = new AbortController();
    async function searchDictionary() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw {
            errorData,
          };
        }

        const data = await response.json();
        setWord(data);
        console.log(data);
        setSearch("");
        setError("");
      } catch (error) {
        setError(error.errorData);
        setWord([]);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    searchDictionary();

    return function () {
      controller.abort();
    };
  }
  return (
    <div className="app">
      <Navbar font={font} setFont={setFont} ToggleTheme={ToggleTheme} />

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
        <Dictionary word={word} font={font} />
      )}
      {isLoading && (
        <l-metronome
          class="loading"
          size="40"
          speed="1.6"
          color="#a445ed"
        ></l-metronome>
      )}

      {!isLoading && !error && <Dictionary word={word} />}
      {error && <Error error={error} />}
      <CodingNinja />
    </div>
  );
};

export default App;
