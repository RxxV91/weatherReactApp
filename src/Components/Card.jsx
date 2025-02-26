import { useSelector } from "react-redux";

function Card() {
  const { location, temp, description, image } = useSelector(
    (state) => state.data
  );

  return (
    <div className="card-item">
      <div className="location">{location}</div>
      <div className="type">
        <img src={image} className="icon" alt={description} />
        {temp !== null ? (
          <span>
            {temp.main}
            <sup>&deg;</sup> C
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="type-label">{description}</div>
      <div className="temp">
        <span>H: {temp.max} &deg;</span>
        <span>L: {temp.min} &deg;</span>
      </div>
    </div>
  );
}

export default Card;
