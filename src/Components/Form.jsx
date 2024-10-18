import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Path_page } from "../Routes";

const Form = ({ action, inputs, termsAndConditions, nameForm = 'FormDefault' }) => {

    const [checkTerms, setCheckTerms] = useState(false);

    const eventChangeCheckTerms = () => {
        setCheckTerms(!checkTerms);
    };

    return (
        <>
            <form onSubmit={action} id={nameForm} className="flex flex-col justify-center py-14">
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
                    >
                        {input.children}
                    </Input>
                ))}
                {termsAndConditions ? (
                    <div className='termsAndConditions relative flex flex-row-reverse'>
                        <Input
                            type="checkbox"
                            name="chekTermsAndConditions"
                            id="chekTermsAndConditions"
                            onChange={eventChangeCheckTerms}
                            isRequired
                            label
                        >
                            Al marcar la casilla, aceptas nuestros
                            <Link to={Path_page.TERMSANDCONDITIONS} className=" font-bold text-Primary px-5 decoration-Primary underline">
                                Términos y Condiciónes
                            </Link>
                        </Input>
                    </div>
                ) : (
                    null
                )}
                <Button type='submit'>Enviar</Button>
            </form >
        </>
    );
};

export { Form };