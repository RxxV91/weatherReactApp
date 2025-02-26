import { useSelector } from "react-redux";

function Error() {
  const { err } = useSelector((state) => state.data);

  return (
    <div className="error-msg">
      <p>⚠️ {err} </p>
    </div>
  );
}

export default Error;
