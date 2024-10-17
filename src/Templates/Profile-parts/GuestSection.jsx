import { Button } from "../../Components/Button";
import signImg from '../../Resources/Images/Profile.png'
import { FormLogin } from "./FormLogin";
import { useState } from "react";

const GuestSection = () => {
    const [IsOpen, setIsOpen] = useState(false);

    const openFormRegister = () => {
        setIsOpen(!IsOpen);
    };

    if (IsOpen) {
        return <FormLogin />;
    };

    return (
        <>
            <div id="GuestSection">
                <div className="section-top">
                    <h2 className="text-center text-5xl font-bold mb-4 mt-14">
                        ¡Bienvenido a tu Perfil!
                    </h2>
                </div>
                <div className="section-content">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-around">
                            <div className="w-full md:w-7/12 flex items-center justify-center mb-4 md:mb-0">
                                <picture>
                                    <img src={signImg} alt="Image-squirrel-with-sign" className="max-w-full h-auto" />
                                </picture>
                            </div>
                            <div className="w-full md:w-5/12 min-h-600 flex justify-center items-center border-2 border-Primary rounded-3xl shadow-bottom-right">
                                <div className="section-buttons flex space-y-4 md:space-y-0 md:space-x-4 md:flex-row ">
                                    <Button classBtn='btn-register bg-Secondary text-white py-4 px-6 text-xl uppercase family-oswald tracking-widest'>
                                        Registrate
                                    </Button>
                                    <Button classBtn='btn-login bg-green-500 text-white py-4 px-6 text-xl hover:border-green-500 hover:text-green-500 uppercase family-oswald tracking-widest'
                                        onClick={openFormRegister}>
                                        Inicia Sesión
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { GuestSection };
