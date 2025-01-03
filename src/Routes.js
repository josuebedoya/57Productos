export const Path_page = {
  HOME: '/',
  US: '/nosotros',
  SERVICES: '/servicios',
  STORE: '/tienda',
  CONTACT: '/contacto',
  PROFILE: '/perfil',
  TERMSANDCONDITIONS: '/terminos-y-condiciones',
  PAYMENTS: 'perfil/pagos',
  ERROR: '*'
};

export const Slug = (t) => {
  return t
   .trim() // Delete spaces from sides
   .replaceAll(' ', '-') // Replace spaces to script
   .replace(/[^a-zA-Z0-9-]/g, '') // Delete characters what not is letter
   .toLowerCase(); // Covert to lower case
};