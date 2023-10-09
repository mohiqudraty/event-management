import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/fSgMPDZ/event.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to Social Event Management
          </h1>
          <p className="text-lg mb-8">
            Creating unforgettable social events for every occasion
          </p>
          <Link to={"/register"}>
            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Get Start For Free Consultations
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
