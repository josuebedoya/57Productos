import getPathsPage from "@/utils/getPathsPage.ts";

export const Routes = [
  {
    id: 'HOME',
    path: '/',
    view: '@/pages/home/index.jsx'
  },
  {
    id: 'US',
    path: '/nosotros',
    view: '@/pages/us/index.jsx'
  },
  {
    id: 'SERVICES',
    path: '/servicios',
    view: '@/pages/services/index.jsx'
  },
  {
    id: 'STORE',
    path: '/tienda',
    view: '@/modules/icommerce/pages/index.jsx',
    children: [
      {
        id: 'FEATURED',
        path: '/destacados',
        view: '@/modules/icommerce/pages/featured.jsx'
      },
      {
        id: 'OFFER',
        path: '/ofertas',
        view: '@/modules/icommerce/pages/offer.jsx'
      },
      {
        id: 'NEW',
        path: '/nuevos',
        view: '@/modules/icommerce/pages/new.jsx'
      }
    ]
  },
  {
    id: 'CONTACT',
    path: '/contacto',
    view: '@/pages/contact/index.jsx'
  },
  {
    id: 'PROFILE',
    path: '/perfil',
    children: [
      {
        id: 'LOGIN',
        path: '/auth/iniciar-sesion',
        view: '@/modules/auth/pages/login.jsx'
      },
      {
        id: 'REGISTER',
        path: '/auth/registrarse',
        view: '@/modules/auth/pages/login.jsx'
      },
      {
        id: 'EDIT_INFO',
        path: '/editar-informacion',
        view: '@/modules/profile/pages/user/information.jsx'
      },
      {
        id: 'PAYMENTS',
        path: '/perfil/pagos',
        view: '@/modules/icommmerce/pages/payments.jsx'
      }
    ]
  },
  {
    id: 'TERMS_AND_CONDITIONS',
    path: '/terminos-y-condiciones',
    view:
      '@/pages/privacy/tyc.jsx'
  },
  {
    id: 'PRIVACY_POLICY',
    path: '/politica-de-privacidad',
    view:
      '@/pages/privacy/pdp.tsx'
  },
  {
    id: 'FAQ',
    path: '/preguntas-frecuentes',
    view: '@/pages/faq/index.jsx'
  },
  {
    id: 'SEARCH',
    path: '/resultados',
    view: '@/modules/search/pages/index.jsx'
  },
  {
    id: 'COMMENTS',
    path: '/comentarios',
    view: '@/modules/comments/pages/index.jsx'
  },
  {
    id: 'ERROR',
    path: '*',
    view: '@/modules/error/pages/404.jsx'
  }
];

// Here object is created object with available paths
// Object Returned {STORE:'/store',HOME:'/'...}
export const Path_page = getPathsPage(Routes);