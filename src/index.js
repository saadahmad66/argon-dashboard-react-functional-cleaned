import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import UserLayout from "layouts/User.js";
// import { UserProvider } from "context/UserContext";



ReactDOM.render(
  <BrowserRouter>
  {/* <UserProvider> */}
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/user" render={(props) => <UserLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Redirect from="/" to="/admin/index" />
    </Switch>
  {/* </UserProvider> */}
    
  </BrowserRouter>,
  document.getElementById("root")
);



// import React from "react";
// import ReactDOM from "react-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import "assets/plugins/nucleo/css/nucleo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "assets/scss/argon-dashboard-react.scss";

// import AdminLayout from "layouts/Admin.js";
// import AuthLayout from "layouts/Auth.js";
// import UserLayout from "layouts/User.js";

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       {/* Admin Layout */}
//       <Route path="/admin" render={(props) => {
//         console.log("Navigating to AdminLayout");
//         return <AdminLayout {...props} />;
//       }} />
      
//       {/* User Layout */}
//       <Route path="/user" render={(props) => {
//         console.log("Navigating to UserLayout");
//         return <UserLayout {...props} />;
//       }} />
      
//       {/* Auth Layout */}
//       <Route path="/auth" render={(props) => {
//         console.log("Navigating to AuthLayout");
//         return <AuthLayout {...props} />;
//       }} />
      
//       {/* Redirect */}
//       <Redirect from="/" to="/admin/index" />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
