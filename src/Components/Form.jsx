import { Button } from "./Button";
import { Input } from "./Input";

const Form = ({ action, inputs }) => {

    return (
        <>
            <form onSubmit={action} className="flex flex-col justify-center py-14">
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
                <Button type='submit'>Enviar</Button>
            </form >
        </>
    );
};

export { Form };