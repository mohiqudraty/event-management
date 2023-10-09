import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(toast("Logout success")).catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to={"/pro"}>Pro</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/consultation "}>Free Consultations </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div data-aos="fade-down">
      <div className="navbar container mx-auto border-y-2 my-1">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"} className="flex items-center">
            <button className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-black rounded-lg text-lg md:text-4xl  text-center mr-2 mb-2">
              Social Event
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">{navLinks}</ul>
        </div>

        {user ? (
          <div className="navbar-end">
            {user.displayName ? (
              <Link to={"/profile"}>
                {" "}
                <p className="hidden sm:block">{user.displayName}</p>
              </Link>
            ) : (
              <p className="hidden sm:block">{user.email}</p>
            )}

            <div className="mx-4">
              {user.photoURL ? (
                <Link to={"/profile"}>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                </Link>
              ) : (
                <CgProfile className="w-10 h-10"></CgProfile>
              )}
            </div>

            {/* <button
          onClick={handleLogOUt}
          className="btn bg-blue-600 hover:bg-blue-700 hover:text-white"
        >
          Sign out
        </button> */}
            <button
              onClick={handleLogOut}
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Sign out
            </button>
          </div>
        ) : (
          <>
            <div className="navbar-end">
              <Link to={"/register"}>
                {" "}
                {/* <button className="btn text-white bg-blue-600 hover:bg-blue-700 hover:text-white">
              Register Now Free!
            </button> */}
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Register Now Free!
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
