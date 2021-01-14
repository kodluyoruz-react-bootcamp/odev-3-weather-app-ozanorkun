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
    <div class="container d-flex justify-content-center">
      <div class="col-lg-8 grid-margin stretch-card">
        <div class="card card-weather">
          <Current></Current>
          <Weekly></Weekly>
        </div>
      </div>
    </div>
  );
}

export default CardBody;
