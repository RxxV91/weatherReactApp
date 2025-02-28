import { useSelector } from "react-redux";

function Feels() {
  const { feels } = useSelector((state) => state.data.temp);

  return (
    <div className="feels-box">
      <span className="title-box">🌡️ FEELS LIKE</span>
      <div className="temp_box">
        <span className="temp_feels">
          {feels}
          <sup>&deg;</sup>
        </span>
      </div>
    </div>
  );
}

export default Feels;
