import { useNavigate } from 'react-router';
import { TextCustom } from '../Components/TextCustom';
import mercadeo from '../Resources/Images/mercadeo.jpg';
import { Button } from '../Components/Button';
import { ArrowRightIcon } from '../Resources/Icons';
import { Path_page } from '../Routes';

const Chance = () => {
  const navigate = useNavigate();

  const styletilte = {
    fontSize: '35px',
    textAlign: 'center',
    color: '$color-primary',
    marginBottom: '80px',
    fontWeight: '600'
  }

  const functiongotocontact = () => {
    navigate(Path_page.CONTACT);
  };

  return (
    <>
      <section id='Chance' className='bg-black/10'>
        <div className='container mx-auto px-3 pt-10 pb-8 tl:pt-20 tl:pb-16 xl:pt-28 xl:pb-24'>
          <div className='section-title text-center'>
            <TextCustom title='¿Estás listo para iniciar tu aventura con nosotros?' atrTitle={styletilte} classTitle='text-shadow-white' />
          </div>
          <div className='content tl:flex items-center'>
            <div className='section-image w-full tl:w-1/2 flex justify-center tl:justify-start xl:justify-center'>
              <img src={mercadeo} alt='image-intro' className='w-full h-auto rounded-3xl shadow-extense hover:scale-105 duration-500 max-w-95 tl:max-w-sm lg:max-w-md xl:max-w-xl 2xl:max-w-2xl aspect-100/63 tl:aspect-100/83 lg:aspect-auto' />
            </div>
            <div className='section-info w-full tl:w-1/2  pl-3 pt-6 tl:pt-0'>
              <div className='description text-justify tl:max-w-lg text-15 leading-7 md:text-lg md:leading-8 xl:text-xl xl:leading-9 '>
                <TextCustom>
                  ¡Únete a nuestro equipo y potencia tus oportunidades de éxito!{"\n"}
                  En nuestro ambiente colaborativo, te ofrecemos la oportunidad de facilitar transacciones que maximicen tus ganancias. Juntos, optimizaremos cada operación y generaremos experiencias positivas para todos. Si estás listo para aprovechar al máximo tu potencial y lograr resultados excepcionales.
                  ¡Nos encantaría contar contigo!
                </TextCustom>
              </div>
              <div className='buttongotocontact mt-6 xl:mt-14'>
                <Button
                  icon={<ArrowRightIcon />}
                  iconRight={true}
                  onClick={functiongotocontact}
                  classBtn={'btn-join text-15 tl:text-lg family-oswald'}
                >
                  Formar parte
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export { Chance };