import { Form } from '../../Components/Form';
import { useState } from "react";
import { MainSectionProfile } from "./MainSection";

const FormRegister = () => {

    const [formValues, setFormValues] = useState({
        name: '',
        lastName: '',
        contactNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [sent, setSent] = useState(false);

    const onChangeValue = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const SendForm = (e) => {
        e.preventDefault();
        setSent(!sent);
    };

    if (sent) {
        return <MainSectionProfile />
    };

    const inputs = [
        {
            value: formValues.name,
            placeholder: 'Nombre...',
            type: 'text',
            name: 'name',
            onChange: onChangeValue,
            isRequired: 'isRequired',
            label: 'label',
            children: 'Tu Nombre/s'
        },
        {
            value: formValues.lastName,
            placeholder: 'Nombre...',
            type: 'text',
            name: 'lastName',
            onChange: onChangeValue,
            label: 'label',
            children: 'Tus Apellidos (Opcional)'
        },
        {
            value: formValues.contactNumber,
            placeholder: 'Ingresa tu Número de Télefono',
            type: 'number',
            name: 'numberContact',
            onChange: onChangeValue,
            label: 'label',
            children: 'Numero de Télefono...'
        },
        {
            value: formValues.email,
            placeholder: 'micorreo@gmail.com',
            type: 'email',
            name: 'email',
            onChange: onChangeValue,
            isRequired: 'isRequired',
            label: 'label',
            children: 'Correo...'
        },
        {
            value: formValues.password,
            placeholder: 'Crea una Contraseña',
            type: 'text',
            name: 'password',
            onChange: onChangeValue,
            isRequired: 'isRequired',
            label: 'label',
            children: 'Contraseña...'
        },
        {
            value: formValues.confirmpassword,
            placeholder: 'Ingresa de Nuevo tu contraseña',
            type: 'password',
            name: 'confirmPassword',
            onChange: onChangeValue,
            isRequired: 'isRequired',
            label: 'label',
            children: 'Repite tu Contraseña...'
        },
    ];

    return (
        <>
            <div id='FormLogin'>
                <Form action={SendForm} inputs={inputs} termsAndConditions nameForm='FormRegister' />
            </div>
        </>
    );
};

export { FormRegister };