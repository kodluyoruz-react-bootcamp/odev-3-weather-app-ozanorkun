import Current from "./CurrentWeather";
import Weekly from "./WeeklyCard";

function CardBody() {
  return (
    <>
      <div class="card card-weather">
        <Current></Current>
        <Weekly></Weekly>
      </div>
    </>
  );
}

export default CardBody;
