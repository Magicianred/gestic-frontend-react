import Dashboard from '../pages/Dashboard';
import ProjetosAtivos from '../pages/Projetos-Ativos'

export const routes = [
  {
    path: '/',
    component: Dashboard,
    private: false,
  },
  {
    path: '/projetos-ativos',
    component: ProjetosAtivos,
    private: false
  }
  // {
  //   path: '/conta',
  //   component: ,
  //   private: true
  // },
  // {
  //   path: '/perfil',
  //   component: ,
  //   private: true
  // },
];
