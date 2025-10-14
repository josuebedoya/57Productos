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
     view: '@/modules/error/pages/index.jsx'
   }
 ]
;

export const Path_page = {
  HOME: '/',
  US: '/nosotros',
  SERVICES: '/servicios',
  STORE: '/tienda',
  CONTACT: '/contacto',
  AUTH: {
    MAIN: '/perfil',
    LOGIN: 'iniciar-sesion',
    EDIT_INFO: 'editar-informacion',
  },
  TERMS_AND_CONDITIONS: '/terminos-y-condiciones',
  PRIVACY_POLICY: '/politica-de-privacidad',
  FREQUENTLY_ASKED_QUESTIONS: '/preguntas-frecuentes',
  PAYMENTS: 'perfil/pagos',
  SEARCH: 'resultados',
  CATEGORIES_STORE: {
    FEATURED: '/destacados',
    OFFER: '/ofertas',
    NEW: '/nuevos',
  },
  COMMENTS: '/comentarios',
  ERROR: '*'
};