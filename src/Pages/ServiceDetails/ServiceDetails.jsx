import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const eventDetails = useLoaderData();
  // console.log(eventDetails);
  const details = eventDetails.find((d) => d.id === idInt);
  // console.log(details);

  return (
    <div className="container mx-auto">
      <div className="w-5/6 mx-auto">
        <img
          className="h-full w-full object-cover "
          src={details.img}
          alt={`Picture of ${details.title}`}
        />
      </div>
      <div>
        <p className="w-4/5 mx-auto text-justify my-10 ">{details.details}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
