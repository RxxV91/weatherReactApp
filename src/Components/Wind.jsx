import { useSelector } from "react-redux";

function Wind() {
  const { speed, deg, gust } = useSelector((state) => state.data.wind);

  return (
    <div className="wind-box">
      <span className="wind-t">💨 WIND</span>
      <div className="box">
        <div className="wind">
          <span className="w-text">Wind</span>{" "}
          <span className="speed-text">{speed}km/h</span>
        </div>
        <div className="wind">
          <span className="w-text">Gust</span>{" "}
          <span className="speed-text">{gust}km/h</span>
        </div>
        <div className="wind">
          <span className="w-text">Direction</span>{" "}
          <span className="speed-text">
            {deg}
            <sup>&deg;</sup>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Wind;
