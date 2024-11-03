import { useState } from "react";
import { Form } from '../../Components/Form';

const FormRegister = ({ actionForm }) => {

    const [formValues, setFormValues] = useState({
        name: '',
        lastName: '',
        contactNumber: null,
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onChangeValue = (e) => {
        const { name, value } = e;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const inputs = [
        {
            value: formValues.name,
            placeholder: 'Nombre...',
            type: 'text',
            name: 'name',
            onChange: onChangeValue,
            isRequired: true,
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
            isRequired: true,
            children: 'Numero de Télefono...'
        },
        {
            value: formValues.email,
            placeholder: 'micorreo@gmail.com',
            type: 'email',
            name: 'email',
            onChange: onChangeValue,
            isRequired: true,
            label: 'label',
            children: 'Correo...'
        },
        {
            value: formValues.password,
            placeholder: 'Crea una Contraseña',
            type: 'password',
            name: 'password',
            onChange: onChangeValue,
            isRequired: true,
            label: 'label',
            children: 'Contraseña...'
        },
        {
            value: formValues.confirmPassword,
            placeholder: 'Ingresa de Nuevo tu contraseña',
            type: 'password',
            name: 'confirmPassword',
            onChange: onChangeValue,
            isRequired: true,
            label: 'label',
            children: 'Repite tu Contraseña...'
        },
    ];

    return (
        <>
            <section id='TemplateFormRegister'>
                <Form action={actionForm} inputs={inputs} termsAndConditions nameForm='FormRegister' />
            </section>
        </>
    );
};

export { FormRegister };