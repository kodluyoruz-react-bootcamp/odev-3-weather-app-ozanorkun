function Current() {
  return (
    <>
      <div class="card-body">
        <div class="weather-date-location">
          <h3>Friday</h3>
          <p class="text-gray">
            <span class="weather-date">25 March, 2019</span>
            <span class="weather-location">Sydney, Australia</span>
          </p>
        </div>
        <div class="weather-data d-flex">
          <div class="mr-auto">
            <h4 class="display-3">
              32 <span class="symbol">°</span>C
            </h4>
            <p>Cloudy</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Current;
