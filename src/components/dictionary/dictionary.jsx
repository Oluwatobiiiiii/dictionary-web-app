/* eslint-disable react/prop-types */
import Result from "../result/result";

const Dictionary = ({ word }) => {
  return (
    <div>
      {word.map((word) => (
        <Result word={word} key={word} />
      ))}
    </div>
  );
};
export default Dictionary;
