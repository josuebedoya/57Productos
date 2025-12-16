import Collapsible from "@ui/collapsible/index.tsx";

const MissionAndVision = () => {
  const content = [
    {
      title: 'misión',
      children: 'Facilitar el éxito comercial al conectar de manera efectiva a vendedores y compradores, ofreciendo soluciones personalizadas que maximicen los beneficios para los vendedores. Nos comprometemos proporcionar un servicio de intermediación transparente y eficiente, utilizando tecnología avanzada y un profundo conocimiento del mercado para asegurar que cada transacción sea beneficiosa y satisfactoria.'
    },
    {
      title: 'visión',
      children: ' Ser la plataforma líder en intermediación comercial, reconocida por nuestra capacidad para conectar vendedores y compradores de manera innovadora y eficiente. Aspiramos a expandir nuestra presencia global, ofreciendo soluciones integrales que impulsen el crecimiento y la rentabilidad de nuestros clientes, mientras fomentamos relaciones comerciales duraderas basadas en la confianza y la excelencia.'
    }
  ];
  return ( <section id='MissionAndVision' className='w-full border-b border-b-gray-300 pb-8 tl:pb-16'>
    <Collapsible
     items={ content }
     className='container mx-auto grid grid-cols-2 mt-6 tl:mt-10 px-3 gap-0 md:gap-6 tl:gap-16 xl:gap-24'
     classNameItem='col-span-full md:col-span-1 shadow-md rounded-2xl py-3'
     classNameTitle='text-shadow-black text-Primary capitalize text-xl xl:text-2xl'
     classNameTitleActive='font-bold'
     classNameBody='!p-5 text-15 tl:text-lg text-justify animate-fade-in'
     multiple
    />
  </section> )
}

export { MissionAndVision };