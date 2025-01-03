import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Path_page } from "../Routes";

const Form = ({ action, inputs, termsAndConditions, nameForm = 'FormDefault' }) => {

    const [ checkTerms, setCheckTerms ] = useState(false);

    const eventChangeCheckTerms = () => {
        setCheckTerms(!checkTerms);
    };

    return (
        <>
            <div id="Form" className=" p-10">
                <form onSubmit={action} id={nameForm} className="flex flex-col justify-center">
                    {inputs.map((input, i) => (
                        <Input
                            key={i}
                            value={input.value}
                            onChange={input.onChange}
                            placeholder={input.placeholder}
                            type={input.type}
                            name={input.name}
                            maxLength={input.maxLength}
                            isRequired={input.isRequired}
                            label={input.label}
                            classContent={`mb-6 ${input.classContent ? input.classContent : ''}`}
                            classLabel={`text-Primary ${input.classLabel ? input.classLabel : ''}`}
                        >
                            {input.children}
                        </Input>
                    ))}
                    {termsAndConditions ? (
                        <div className='terms-and-conditions relative flex'>
                            <input
                                type="checkbox"
                                name="chekTermsAndConditions"
                                id="chekTermsAndConditions"
                                onChange={eventChangeCheckTerms}
                                required
                                className='bg-transparent text-Primary text-sm rounded-xl border border-Primary py-2 px-5  focus:outline-none  focus:shadow-custom'
                            />
                            <label htmlFor='chekTermsAndConditions' className='label-input'>
                                Al marcar la casilla, aceptas nuestros
                                <Link to={Path_page.TERMS_AND_CONDITIONS} className=" font-bold text-Primary mx-2 px-1 decoration-Primary underline">
                                    Términos y Condiciónes
                                </Link>
                            </label>
                        </div>
                    ) : null}
                    <div className="btn-send-form w-full">
                        <Button type='submit' classBtn='submit px-6 py-2 mt-6' >Enviar</Button>
                    </div>
                </form >
            </div>
        </>
    );
};

export { Form };