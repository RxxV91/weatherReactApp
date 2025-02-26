import { useDispatch } from "react-redux";
import { weatherData } from "../Slices/DateSlice";

function Header() {
  const dispatch = useDispatch();

  function handleClick(e) {
    const city = document.querySelector(".form-input");
    e.preventDefault();
    dispatch(weatherData(city.value));
  }

  return (
    <header className="header">
      <form>
        <span> Your city </span>
        <input type="text" placeholder="Search" className="form-input" />
        <button className="btn-search" onClick={handleClick}>
          Go
        </button>
      </form>
    </header>
  );
}

export default Header;
