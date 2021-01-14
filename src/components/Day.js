import { useContext } from "react";
import { ForecastContext } from "../contexts/ForecastContext";

function Day() {
  const { results } = useContext(ForecastContext);

  return results.slice(1).map((result, i) => {
    return (
      <div key={i} className="weakly-weather-item">
        <p className="mb-0">{result.dayShort}</p>
        <img
          src={`https://www.weatherbit.io/static/img/icons/${result.iconCode}.png`}
          alt=""
          width="45"
          height="40"
        />
        <p className="mb-0">
          <span>
            Maks: {result.maxTemp}
            <span className="symbol">°</span>C
          </span>
          <br />
          <span>
            Min: {result.minTemp}
            <span className="symbol">°</span>C
          </span>
        </p>
      </div>
    );
  });
}

export default Day;
