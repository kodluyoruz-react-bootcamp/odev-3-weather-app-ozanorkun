import { cities } from "../consts/cities";
import { useContext } from "react";
import { ForecastContext } from "../contexts/ForecastContext";

function Dropdown() {
  const { setCityName } = useContext(ForecastContext);

  const changeHandler = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div className="container d-flex justify-content-center">
      <h5>Listeden İl Seçiniz: </h5>
      <form name="cityname" type="submit" onChange={changeHandler}>
        {cities}
      </form>
      <br />
      <br />
    </div>
  );
}

export default Dropdown;
