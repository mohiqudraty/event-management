import { Link, useLoaderData } from "react-router-dom";

const Pro = () => {
  const proPlan = useLoaderData();
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
        {proPlan.map((pro) => (
          <div
            key={pro.subscription_id}
            className="w-full flex flex-col max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              {pro.name}
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">
                {pro.price_per_month}
              </span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            {pro.features.map((feat) => (
              <ul key={feat} role="list" className=" my-2 flex-grow">
                <li className="flex space-x-3 items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    {feat}
                  </span>
                </li>

                {/* ... */}
              </ul>
            ))}

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="text-white   bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              {" "}
              Choose plan
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Welcome To Pro Plan</h3>
                <p className="py-4">
                  If you want to buy any plan Please Contact with US.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}

                    <Link to={"/contact"}>
                      {" "}
                      <button className="btn bg-blue-600 text-white">
                        Contact Us
                      </button>
                    </Link>
                    <button className="btn bg-red-600 text-white">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pro;
