
import React from "react";
import { Link } from "react-router-dom";

const UserNavbar = (props) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 shadow-md">
      <Link to="#" className="text-lg font-semibold text-gray-800">
        {props.brandText}
      </Link>
      <div className="flex space-x-4">
        <Link to="/user/profile" className="text-white-100 hover:text-white-200">
          Profile
        </Link>
        <Link to="/user/setting" className="text-white-100 hover:text-white-200">
          Settings
        </Link>
      </div>
    </div>
  );
};

export default UserNavbar;
