import { toast } from "react-toastify";

const Consultation = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast("Your Request Submitted, We will Contact With You.");
  };

  return (
    <div className="container mx-auto my-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Request a Free Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border p-2"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border p-2"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg mb-1">
              Message
            </label>
            <textarea
              id="message"
              className="border p-2 h-24"
              placeholder="Your Message"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Consultation;
