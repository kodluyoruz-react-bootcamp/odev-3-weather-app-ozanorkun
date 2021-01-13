import CardBody from "./components/CardBody";
import "./App.css";

function App() {
  return (
    <>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Hava Durumu</title>
          <link
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.6.95/css/materialdesignicons.css"
            rel="stylesheet"
          />
          <link href="./style.css" rel="stylesheet" />
        </head>
        <body>
          <div class="padding">
            <div class="row">
              <div class="container d-flex justify-content-center">
                <div class="col-lg-8 grid-margin stretch-card">
                  {/*weather card starts*/}
                  <CardBody></CardBody>
                  {/*weather card ends*/}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="container d-flex justify-content-center">
                Bu sayfa Ozan Orkun tarafından hazırlanmıştır
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}

export default App;
