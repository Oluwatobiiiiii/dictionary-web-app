/* eslint-disable react/prop-types */
import "./result.css";

const Result = ({ word }) => {
  console.log(word);

  return (
    <div className="result">
      <div className="heading">
        <div className="word">
          <h1>{word.word}</h1>
          <p>{word.phonetic}</p>
        </div>

        <div className="pronunciation">
          <img src="/src/assets/images/icon-play.svg" alt="play-icon" />
        </div>
      </div>

      <div className="word-meanings">
        <div className="meaning-1">
          {word.meanings.map((meaning) => (
            <>
              <div className="part">
                <h3 className="part-of-speech-1">{meaning.partOfSpeech}</h3>
                <div className="line"></div>
              </div>
              <div className="meanings">
                <p>Meaning</p>
                <ul className="definitions-1">
                  {meaning.definitions.map((definitions) => (
                    <li key={definitions}>{definitions.definition}</li>
                  ))}
                </ul>
              </div>
              {meaning.synonyms.length > 0 && (
                <div className="synonyms">
                  <h3>Synonyms</h3>
                  <p>
                    {meaning.synonyms.map((s) => (
                      <p key={s}>{s}</p>
                    ))}
                  </p>
                </div>
              )}
            </>
          ))}
        </div>

        <div className="source">
          <h6>Source</h6>
          <p>
            <a className="source-link" target="blank" href={word.sourceUrls}>
              {word.sourceUrls}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
