import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e);
    const form = new FormData(e.currentTarget);
    // console.log(form);

    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);

    setError("");

    signIn(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => {
        setError(error.code);
      });
  };

  // login with google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(
        (result) => console.log(result.user),
        navigate(location?.state ? location.state : "/"),
        toast("Login Success")
      )
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className=" min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {error && <p className="text-center text-red-600">{error}</p>}
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Login
              </button>
            </div>

            <p className="text-center">
              <small>
                {" "}
                New Here?{" "}
                <Link
                  to={"/register"}
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Register
                </Link>
              </small>
            </p>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline mb-6 mx-3"
          >
            <span>
              <FaGoogle></FaGoogle>
            </span>{" "}
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
