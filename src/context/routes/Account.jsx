import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SavedCoin from "../../components/SavedCoin";
import { UserAuth } from "../AuthContext";

function Account() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  if (user) {
    return (
      <div className="max-w-[1140px] mx-auto">
        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div>
            <h1 className="font-bold text-2xl pb-4">Account</h1>
            <div>
              {user?.email ? <p>Email: {user?.email}</p> : <p>Welcome</p>}
            </div>
          </div>
          <div>
            <button
              onClick={handleSignOut}
              className="border px-6 py-2 rounded-2xl shadow-lg hover:shadow-xl"
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div className="w-full min-h-[300px]">
            <h1 className="font-bold text-2xl pb-4">Watch List</h1>
            <SavedCoin />
          </div>
        </div>
      </div>
    );
  } else {
    <Navigate to="/signin" />;
  }
}

export default Account;
