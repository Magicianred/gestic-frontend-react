import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export const routes = [
  {
    path: '/',
    component: Dashboard,
    private: true,
  },
  {
    path: '/login',
    component: SignIn,
    private: false,
  },
  {
    path: '/register',
    component: SignUp,
    private: false,
  },
  // {
  //   path: '/perfil',
  //   component: ,
  //   private: true
  // },
];
