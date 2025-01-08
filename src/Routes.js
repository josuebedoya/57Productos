export const Path_page = {
  HOME: '/',
  US: '/nosotros',
  SERVICES: '/servicios',
  STORE: '/tienda',
  CONTACT: '/contacto',
  PROFILE: '/perfil',
  TERMS_AND_CONDITIONS: '/terminos-y-condiciones',
  PRIVACY_POLICY: '/politica-de-privacidad',
  FREQUENTLY_ASKED_QUESTIONS: '/preguntas-frecuentes',
  COMMENTS: '/comentarios',
  PAYMENTS: 'perfil/pagos',
  CATEGORIES_STORE: {
  FEATURED: '/destacados',
    OFFER: '/ofertas',
    NEW: '/nuevos',
  },
  ERROR: '*'
};

export const Slug = (t) => {
  return t
   .trim() // Delete spaces from sides
   .replaceAll(' ', '-') // Replace spaces to script
   .replace(/[^a-zA-Z0-9-]/g, '') // Delete characters what not is letter
   .toLowerCase(); // Covert to lower case
};