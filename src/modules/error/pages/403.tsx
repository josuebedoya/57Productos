import {Metas} from "@/components/metas/metas.jsx";
import {useSettings} from "@/context/settings.jsx";
import Button from "@ui/button/index.js";
import {useNavigate} from "react-router";

const Error403 = () => {
  const {settings} = useSettings();
  const navigate = useNavigate();

  return (
    <>
      <Metas
        title={`${settings?.site.name} | Index`}
        description='Index, la página que buscas no está disponible.'
        type='website'/>
      <section className='sm:container max-w-[500px] mx-auto py-10'>
        <div className='text-Primary text-lg text-center font-bold'>!Ups, intentas acceder a un lugar inautorizado¡
        </div>
        <div className='text-red-600 text-3xl text-center font-bold family-oswald mt-4'>403</div>
        <div className="text-left mt-4">
          <Button
            variant='flat'
            color='primary'
            variantHover='flat'
            colorHover='secondary'
            className='font-semibold'
            icon='TiArrowBackOutline'
            onClick={() => navigate('/')}>Volver</Button>
        </div>
      </section>
    </>
  );
};

export {Error403};