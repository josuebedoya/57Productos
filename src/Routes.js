export const Path_page = {
  HOME: '/',
  US: '/nosotros',
  SERVICES: '/servicios',
  STORE: '/tienda',
  CONTACT: '/contact',
  PROFILE: '/perfil',
  TERMSANDCONDITIONS: '/terminos-y-condiciones',
  TERMS_AND_CONDITIONS: '/terminos-y-condiciones',
  PRIVACY_POLICY: '/politica-de-privacidad',
  FREQUENTLY_ASKED_QUESTIONS: '/preguntas-frecuentes',
  COMMENTS: '/comentarios',
  PAYMENTS: 'perfil/pagos',
  COMMENTS: '/comentarios',
  ERROR: '*'
};

export const Slug = ( t ) => {
   return  t.replaceAll( ' ', '-' ).toLowerCase();
};