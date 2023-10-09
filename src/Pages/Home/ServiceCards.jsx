import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCards = ({ service }) => {
  // console.log(service);
  const { id, img, title, description, details, price } = service;
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="card bg-base-100 shadow-xl border-4"
    >
      <figure>
        <img
          className="h-48 sm:h-64 w-full object-cover rounded-t-xl "
          src={img}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {description.length > 150 ? (
          <p className="text-sm sm:text-base">
            {" "}
            {description.slice(0, 150)}...
          </p>
        ) : (
          <p className="text-sm sm:text-base">{description}</p>
        )}
        <p className="hidden">{details}</p>
        <div className="flex justify-between items-center">
          <div className="text-green-600 font-bold">{price}</div>
          <Link to={`/service/${id}`}>
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;

ServiceCards.propTypes = {
  service: PropTypes.object.isRequired,
};
