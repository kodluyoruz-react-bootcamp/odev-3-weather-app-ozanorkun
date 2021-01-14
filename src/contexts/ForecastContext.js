import { useState, createContext } from "react";

export const ForecastContext = createContext();

export const ForecastProvider = ({ children }) => {
  const [cityName, setCityName] = useState("İstanbul");
  const [results, setResults] = useState([
    {
      maxTemp: null,
      minTemp: null,
      dayShort: null,
      dayLong: null,
      date: null,
      month: null,
      year: null,
      iconCode: null,
    },
  ]);

  const values = {
    cityName,
    setCityName,
    results,
    setResults,
  };

  return (
    <ForecastContext.Provider value={values}>
      {children}
    </ForecastContext.Provider>
  );
};
