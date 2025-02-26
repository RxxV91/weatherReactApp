import { ConvertToCelsius, getNumOfDay } from "../service/getData";

/* eslint-disable react/prop-types */
function SmallCard({ data, day }) {
  const numDayWeek = getNumOfDay(day);

  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="small-item">
      <span className="day-name"> {weekday[numDayWeek]}</span>
      <span className="info">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}
          className="icon"
        />
        <span className="degres">
          {ConvertToCelsius(data.main.temp_min)}
          <sup>&deg;</sup> /&nbsp;
          {ConvertToCelsius(data.main.temp_max)}
          <sup>&deg;</sup>C
        </span>
      </span>

      <span>{data.weather[0].description}</span>
    </div>
  );
}

export default SmallCard;
