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
            isRequired: 'isRequired',
            label: 'label',
            children: 'Tu Usuario'
        },
        {
            value: password,
            placeholder: 'Ingresa tu contraseña',
            type: 'password',
            name: 'password',
            onChange: onChangeValuePassword,
            isRequired: 'isRequired',
            label: 'label',
            children: 'Contraseña'
        },
    ];

    return (
        <>
            <div id='FormLogin'>
                <Form action={SendForm} inputs={inputs} />
            </div>
        </>
    );
};

export { FormLogin };