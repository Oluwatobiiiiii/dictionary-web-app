/* eslint-disable react/prop-types */
import Result from "../result/result";

const Dictionary = ({ word }) => {
  return (
    <div>
      {word.map((word, key) => (
        <Result word={word} key={key} />
      ))}
    </div>
  );
};
export default Dictionary;
