// eslint-disable-next-line react-refresh/only-export-components
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
  PAYMENTS: 'perfil/pagos',
  CATEGORIES_STORE: {
    FEATURED: '/destacados',
    OFFER: '/ofertas',
    NEW: '/nuevos',
  },
  COMMENTS: '/comentarios',
  ERROR: '*'
};

export const Slug = (t) => {
  return t.trim() // Delete spaces from sides
   .replaceAll(' ', '-') // Replace spaces to script
   .replace(/[^a-zA-Z0-9-]/g, '') // Delete characters what not is letter
   .replace(/-+/g, '-') // If there are more the one "-" ,  leaves only one
   .toLowerCase(); // Covert to lower case
};