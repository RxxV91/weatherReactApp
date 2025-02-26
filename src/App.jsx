import { useSelector } from "react-redux";
import Card from "./Components/Card";
import Header from "./Components/Header";
import SmallCard from "./Components/SmallCard";
import Loader from "./Components/Loader";
import Error from "./Components/Error";

function App() {
  const { forecast, status, location } = useSelector((state) => state.data);
  console.log(forecast);
  return (
    <section className="section">
      {status === "isLoading" && <Loader />}
      <Header />

      {status === "error" && <Error />}
      {location ? <Card /> : ""}
      {location ? (
        <div className="container">
          <div className="forecast">🗓️ 13-DAY FORECAST</div>
          {forecast.map((card, index) => (
            <SmallCard data={card} day={index} key={index} />
          ))}
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default App;
