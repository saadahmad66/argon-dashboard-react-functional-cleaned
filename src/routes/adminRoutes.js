// src/routes/adminRoutes.js

import Index from 'views/Index.js';
import Icons from 'views/Icons.js';
import Maps from 'views/Maps.js';
import Tables from 'views/Tables.js';
import AdminLogin from 'views/auth/AdminLogin';

const adminRoutes = [
  {
    path: '/index',
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: Index,
    layout: '/admin',
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: 'ni ni-planet text-blue',
    component: Icons,
    layout: '/admin',
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: 'ni ni-pin-3 text-orange',
    component: Maps,
    layout: '/admin',
  },
  {
    path: '/tables',
    name: 'Tables',
    icon: 'ni ni-bullet-list-67 text-red',
    component: Tables,
    layout: '/admin',
  },
  	{
		path : '/adminlogin',
		name : 'AdminLogin',
		icon : 'ni ni-key-25 text-info',
		component : AdminLogin,
		layout : '/auth',
		isMenu : false,
	},
];

export default adminRoutes;
