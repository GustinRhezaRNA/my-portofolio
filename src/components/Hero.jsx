import svg from '../assets/react-16-svgrepo-com.svg';

export default function Hero() {
  return (
    <div>
      <div className="container hero d-flex justify-content-evenly">
        <div className="mr-5">
          <p>
            <span id="plus">I&apos;am </span>
            <br />
            <span className="nama"> Gustin Rheza R.N.A</span>
          </p>
          <br />
          <span id="sub">Web Enthusiast | Undergraduate Student</span>
        </div>
        <img className="image" src={svg}>
          
          
        </img>
      </div>
    </div>
  );
}
