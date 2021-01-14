import { useContext } from "react";
import { ForecastContext } from "../contexts/ForecastContext";

function Current() {
  const { cityName, results } = useContext(ForecastContext);
  return (
    <div class="card-body">
      <div class="weather-date-location">
        <h3>{results[0].dayLong}</h3>
        <p class="text-gray">
          <span class="weather-date">
            {results[0].date} {results[0].month} {results[0].year}
          </span>
          <span class="weather-location">, {cityName}</span>
        </p>
      </div>
      <div class="weather-data d-flex">
        <div class="mr-auto">
          <h4 class="display-3">
            Sıcaklık: {results[0].temp} <span class="symbol">°</span>C
          </h4>
          <h5>{results[0].description}</h5>
          <br />
          <h6>
            En Yüksek Sıcaklık: {results[0].maxTemp}{" "}
            <span class="symbol">°</span>C
          </h6>
          <h6>
            En Düşük Sıcaklık: {results[0].minTemp}{" "}
            <span class="symbol">°</span>C
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Current;
