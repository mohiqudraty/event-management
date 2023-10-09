import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {" "}
      <div className="flex items-center h-screen w-full justify-center">
        <div className="max-w-xs">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              {user.photoURL ? (
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <CgProfile className="w-32 h-32 rounded-full mx-auto"></CgProfile>
              )}
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                {user.displayName ? user.displayName : "Unknown"}
              </h3>

              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Phone
                    </td>
                    <td className="px-2 py-2">
                      {user.phoneNumber ? user.phoneNumber : "Hidden"}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Email
                    </td>
                    <td className="px-2 py-2">
                      {user.email ? user.email : "Null"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center my-3">
                <a
                  className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  href="#"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
