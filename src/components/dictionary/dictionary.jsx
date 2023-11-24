/* eslint-disable react/prop-types */
import Result from "../result/result";

const Dictionary = ({ word, font }) => {
  return (
    <div>
      {word.map((word, key) => (
        <Result word={word} key={key} font={font} />
      ))}
    </div>
  );
};
export default Dictionary;
