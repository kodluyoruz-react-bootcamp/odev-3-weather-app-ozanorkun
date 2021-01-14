import { useContext } from "react";
import { ForecastContext } from "../contexts/ForecastContext";

function Current() {
  const { cityName, results } = useContext(ForecastContext);
  return (
    <div className="card-body">
      <div className="weather-date-location">
        <h3>{results[0].dayLong}</h3>
        <p className="text-gray">
          <span className="weather-date">
            {results[0].date} {results[0].month} {results[0].year}
          </span>
          <span className="weather-location">, {cityName}</span>
        </p>
      </div>
      <div className="weather-data d-flex">
        <div className="mr-auto">
          <h4 className="display-3">
            Sıcaklık: {results[0].temp} <span className="symbol">°</span>C
          </h4>
          <h5>{results[0].description}</h5>
          <br />
          <h6>
            En Yüksek Sıcaklık: {results[0].maxTemp}{" "}
            <span className="symbol">°</span>C
          </h6>
          <h6>
            En Düşük Sıcaklık: {results[0].minTemp}{" "}
            <span className="symbol">°</span>C
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Current;
