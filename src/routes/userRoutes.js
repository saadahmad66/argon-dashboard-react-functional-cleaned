// src/routes/userRoutes.js
import Profile from 'views/Profile';
import Setting from 'views/Setting';
import Activity from 'views/Activity';
import Support from 'views/Support';
import Register from 'views/auth/Register';
import Login from 'views/auth/Login';
import UserEnter from 'views/UserEnter';

var userRoutes = [
  {
    path : '/userenter',
    name : 'Fill Info',
    icon : 'ni ni-collection text-gray',
    component : UserEnter,
    layout : '/user',
  },
  
  {
    path: '/profile',
    name: 'Profile',
    icon : 'ni ni-single-02 text-yellow',
    component: Profile,
    layout: '/user',
  },
  {
    path: '/setting',
    name: 'Setting',
    icon : 'ni ni-settings-gear-65 text-blue',
    component: Setting,
    layout: '/user',
  },
  {
    path: '/activity',
    name: 'Activity',
    icon : 'ni ni-calendar-grid-58 text-red',
    component: Activity,
    layout: '/user',
  },
  {
    path: '/support',
    name: 'Support',
    icon : 'ni ni-support-16 text-green',
    component: Support,
    layout: '/user',
  },
  	{
		path: '/login',
		// name: 'Login',
		// icon: 'ni ni-key-25 text-info',
		component: Login,
		layout: '/auth',
		isMenu: false,
	},
	{
		path: '/register',
		// name: 'Register',
		// icon: 'ni ni-circle-08 text-pink',
		component: Register,
		layout: '/auth',
		isMenu: false
	},
];

export default userRoutes;
