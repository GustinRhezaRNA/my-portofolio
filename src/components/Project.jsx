import apod from '../assets/apod.png';
import gym from '../assets/gym-app.png';

export default function Project() {
  return (
    <div
      className="container project"
      id="project"
    >
      <div className="row">
        <div className="col mid">
          <div className="card w-75">
            <img
              src={gym}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h1 className="card-title">Gym Bro</h1>
              <p className="card-text">Generate personalized step-by-step gym workouts tailored to your fitness goals.</p>
              <a
                href="https://gym-fit-bro.netlify.app/"
                className="btn "
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col mid">
          <div className="card w-75">
            <img
              src={apod}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h1 className="card-title">APOD</h1>
              <p className="card-text">Discover a new astronomy image daily with detailed explanations from NASA.</p>
              <a
                href="https://rheza-apod-app.netlify.app/"
                className="btn btn-primary"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col mid">
          <div className="card w-75">
            <img
              src="..."
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
              <a
                href="#"
                className="btn btn-primary"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col mid">
          <div className="card w-75">
            <img
              src="..."
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
              <a
                href="#"
                className="btn btn-primary"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
