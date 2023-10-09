import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";

import { useEffect, useState } from "react";
import ServiceCards from "./ServiceCards";
import Testimonial from "./Testimonial";
import Partner from "./Partner";
import About from "./About";

const Home = () => {
  const services = useLoaderData();
  const [testimonial, setTestimonial] = useState();
  // console.log(testimonial);

  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <Hero></Hero>
      {/* service section  */}
      <div className="container mx-auto my-10 py-10">
        <h2
          data-aos="fade-up"
          className=" text-4xl w-60 mx-auto font-black text-center my-5 py-5 border-y-4 border-dotted border-blue-500"
        >
          Our Services
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5">
          {services &&
            services.map((service) => (
              <ServiceCards key={service.id} service={service}></ServiceCards>
            ))}
        </div>
      </div>
      {/* testimonial  */}
      <div data-aos="zoom-in">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">
          What our client says
        </h1>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-20 px-10 py-20 gap-6 mb-10">
          {testimonial &&
            testimonial.map((review) => (
              <Testimonial key={review.id} review={review}></Testimonial>
            ))}
        </div>
      </div>

      {/* partner section  */}
      <Partner></Partner>

      {/* about section  */}

      <About></About>
    </div>
  );
};

export default Home;
