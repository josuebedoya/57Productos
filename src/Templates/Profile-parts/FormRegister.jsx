import { Form } from '../../Components/Form';
import { useState } from "react";
import { MainSectionProfile } from "./MainSection";

const FormRegister = () => {

    const [formValues, setFormValues] = useState({
        name: '',
        lastName: '',
        contactNumber: null,
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [sent, setSent] = useState(false);

    const onChangeValue = (e) => {
        const { name, value } = e;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const SendForm = (e) => {
        e.preventDefault();
        const form = e.target;

        if (form.reportValidity()) {
            setSent(!sent);
        }
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
            isRequired: true,
            label: 'label',
            children: 'Tu Nombre/s',
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
                <div className='modal fixed inset-0 bg-black bg-opacity-80 flex justify-center items-start overflow-auto py-28 z-50'>
                    <div className='modal-content-form relative bg-white p-16 rounded-3xl shadow-modal max-w-93'>
                        <Form action={SendForm} inputs={inputs} termsAndConditions nameForm='FormRegister' />
                    </div>
                </div>
            </section>
        </>
    );
};

export { FormRegister };