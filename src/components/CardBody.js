import { useContext, useEffect } from "react";
import { search } from "../search/search";
import { ForecastContext } from "../contexts/ForecastContext";
import Current from "./CurrentWeather";
import Weekly from "./WeeklyCard";

function CardBody() {
  const { cityName, setResults } = useContext(ForecastContext);
  useEffect(() => {
    search(cityName).then((dailyForecastList) => {
      setResults(dailyForecastList);
    });
  }, [cityName, setResults]);
  return (
    <div className="container d-flex justify-content-center">
      <div className="col-lg-9 grid-margin stretch-card">
        <div className="card card-weather">
          <Current></Current>
          <Weekly></Weekly>
        </div>
      </div>
    </div>
  );
}

export default CardBody;
