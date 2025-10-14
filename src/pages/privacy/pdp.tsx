import {useSettings} from "@/context/settings.jsx";
import {Metas} from "@/components/metas/metas.jsx";

const TermsAndConditions = () => {
  const {settings} = useSettings();

  return (
    <>
      <Metas
        title={`${settings?.site.name} | Políticas de Privacidad`}
        description='Lee nuestras políticas de privacidad para entender mejor nuestros servicios.'
        type='website'
      />
      <section className='container mx-auto px-3 py-16'>
        <h1 className='text-2xl font-bold mb-4'>Políticas de Privacidad</h1>
        <p>En esta sección, encontrarás las Políticas de Privacidad sobre uso datos de nuestro sitio web.</p>
      </section>
    </>
  );
}

export {TermsAndConditions};