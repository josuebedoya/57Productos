import { Form } from '../../Components/Form';
import { useState } from "react";
import { MainSectionProfile } from "./MainSection";

const FormLogin = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [sent, setSent] = useState(false);

    const onChangeValueUser = (e) => {
        setUser(e);
    }
    const onChangeValuePassword = (e) => {
        setPassword(e);
    }

    const SendForm = (e) => {
        e.preventDefault();
        setSent(!sent);
    };

    if (sent) {
        return <MainSectionProfile />
    };

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
                <div className='modal fixed inset-0 bg-black bg-opacity-80 flex justify-center items-start overflow-auto py-28 z-50'>
                    <div className='modal-content-form relative bg-white p-16 rounded-3xl shadow-modal max-w-93'>
                        <Form action={SendForm} inputs={inputs} nameForm='FormLogin' />
                    </div>
                </div>
            </section>
        </>
    );
};

export { FormLogin };