import { Button } from "../../Components/Button";
import signImg from '../../Resources/Images/Profile.png'
import { FormLogin } from "./FormLogin";
import { useState } from "react";
import { FormRegister } from "./FormRegister";

const GuestSection = () => {
    const [ isOpenLogin, setIsOpen ] = useState(false);
    const [ isOpenRegister, setIsOpenRegister ] = useState(false);

    const openFormLogin = () => {
        setIsOpen(!isOpenLogin);
    };
    const openFormRegister = () => {
        setIsOpenRegister(!isOpenRegister);
    };


    if (isOpenLogin) {
        return <FormLogin />;
    } else if (isOpenRegister) {
        return <FormRegister />;
    };


    return (
        <>
            <section id="GuestSection">
                <div className="section-top">
                    <h2 className="text-center text-5xl font-bold mb-4 mt-14">
                        ¡Bienvenido a tu Perfil!
                    </h2>
                </div>
                <div className="section-content">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-center">
                            <div className="w-full md:w-2/5 flex items-center justify-center mb-4 md:mb-0">
                                <picture>
                                    <img src={signImg} alt="Image-squirrel-with-sign" className="max-w-full h-auto" />
                                </picture>
                            </div>
                            <div className="w-auto md:w-2/5 flex justify-start items-center">
                                <div className="section-buttons flex space-y-4 md:space-y-0 md:space-x-4 md:flex-row ">
                                    <Button classBtn='btn-register bg-Secondary text-white py-4 px-6 text-xl duration-500 uppercase family-oswald tracking-widest'
                                        onClick={openFormRegister}>
                                        Registrate
                                    </Button>
                                    <Button classBtn='btn-login bg-green-500 text-white py-4 px-6 text-xl hover:border-green-500 hover:text-green-500 duration-500 uppercase family-oswald tracking-widest'
                                        onClick={openFormLogin}>
                                        Inicia Sesión
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export { GuestSection };
