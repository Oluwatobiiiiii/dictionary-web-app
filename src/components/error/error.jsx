/* eslint-disable react/prop-types */
import "./error.css";

const Error = ({ error }) => {
  console.log(error);
  return (
    <div className="error">
      <p className="emoji">😭</p>
      <h1>{error.title}</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default Error;
