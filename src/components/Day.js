import { useContext } from "react";
import { ForecastContext } from "../contexts/ForecastContext";

function Day() {
  const { results } = useContext(ForecastContext);

  return results.slice(1).map((result) => {
    return (
      <div class="weakly-weather-item">
        <p class="mb-0">{result.dayShort}</p>
        <i class="mdi mdi-weather-cloudy"></i>
        <p class="mb-0">
          <span>Maks: {result.maxTemp}</span>
          <br />
          <span>Min: {result.minTemp}</span>
        </p>
      </div>
    );
  });
}

export default Day;
