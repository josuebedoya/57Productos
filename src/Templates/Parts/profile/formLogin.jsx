import { useState } from "react";
import {Form} from "@/components/form.jsx";

const FormLogin = ( { actionForm } ) => {

  const [ user, setUser ] = useState( '' );
  const [ password, setPassword ] = useState( '' );

  const onChangeValueUser = ( e ) => {
    setUser( e.target );
  }

  const onChangeValuePassword = ( e ) => {
    setPassword( e.target );
  }

  const inputs = [
    {
      value: user,
      placeholder: 'Ingresa tu Número de contacto o Correo',
      type: 'text',
      name: 'user',
      onChange: onChangeValueUser,
      isRequired: true,
      label: 'label',
      children: 'Tu Usuario'
    },
    {
      value: password,
      placeholder: 'Ingresa tu contraseña',
      type: 'password',
      name: 'password',
      onChange: onChangeValuePassword,
      isRequired: true,
      label: 'label',
      children: 'Contraseña'
    },
  ];

  return (
   <>
     <section id='TemplateFormLogin'>
       <Form action={ actionForm } inputs={ inputs } nameForm='FormLogin'/>
     </section>
   </>
  );
};

export { FormLogin };