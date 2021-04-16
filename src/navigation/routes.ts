import Dashboard from '../pages/Dashboard';
import Login from '../pages/SignIn';

export const routes = [
  {
    path: '/',
    component: Dashboard,
    private: false,
  },
  {
    path: '/login',
    component: Login,
    private: false,
    hasNavBar: false,
  },
  // {
  //   path: '/perfil',
  //   component: ,
  //   private: true
  // },
];
