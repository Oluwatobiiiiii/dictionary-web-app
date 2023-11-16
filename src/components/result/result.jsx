/* eslint-disable react/prop-types */
import "./result.css";

const Result = ({ word }) => {
  console.log(word);

  return (
    <div className="result">
      <div className="heading">
        <div className="word">
          <h1>{word[0].word}</h1>
          <p>{word.phonetic}</p>
        </div>

        <div className="pronunciation">
          <img src="/src/assets/images/icon-play.svg" alt="play-icon" />
        </div>
      </div>

      <div className="word-meanings">
        <div className="meaning-1">
          <h3 className="part-of-speech-1">Noun</h3>
          <div className="meanings">
            <p>Meaning</p>
          </div>
        </div>

        <div className="meaning-2">
          <h3>Verb</h3>
          <div className="meanings">
            <p>Meaning</p>
            {}
          </div>
        </div>
      </div>

      <div className="source">
        <h6>Source</h6>
        <p>ddneudhouen</p>
      </div>
    </div>
  );
};

export default Result;
