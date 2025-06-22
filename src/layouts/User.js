// src/layouts/User.js
import React, { useEffect } from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import UserSidebar from "components/Sidebar/UserSidebar";
import userRoutes from "routes/userRoutes";

const UserLayout = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/user") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  

  // ******************************************************************** //

  useEffect(() => {
    console.log("UserLayout component loaded");
  }, []);

  return (
    <div className="flex">
      <UserSidebar routes={userRoutes} />
      <div className="flex-grow bg-gray-100 " ref={mainContent}>
        {/* <UserNavbar brandText={getBrandText(props.location.pathname)} /> */}
        <Switch>
          {getRoutes(userRoutes)}
          <Redirect from="*" to="/user/userenter" />
        </Switch>
      </div>
    </div>
  );
};

export default UserLayout;
