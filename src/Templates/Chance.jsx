import { TextCustom } from '../Components/TextCustom/TextCustom';
import mercadeo from '../Images/mercadeo.jpg';
import { Button } from '../Components/Button';
import { ArrowRightIcon } from '../Resources/Icons';

const Chance = () => {
  const styletilte = {
    fontSize: '35px',
    textAlign: 'center',
    color: 'var(--color-primary)',
    marginBottom: '60px'
  }

  const functiongotocontact = () => {
    return alert('La función de este botón va a ser ir a la página de contacto.');
  }
  return (
    <>
      <div id='Content' className='container mx-auto px-4 py-12'>
        <div className='section-title text-center'>
          <TextCustom title='¿Estás listo para iniciar tu aventura con nosotros?' atrTitle={styletilte} />
        </div>
        <div className='flex items-center'>
          <div className='section-image w-1/2 pr-4'>
            <img src={mercadeo} alt='image-intro' className='w-full h-auto rounded-3xl shadow-extense hover:scale-105 duration-500' />
          </div>
          <div className='section-description w-1/2 px-12'>
            <div className='description text-justify'>
              <TextCustom>
                ¡Únete a nuestro equipo y potencia tus oportunidades de éxito! En nuestro ambiente colaborativo, te ofrecemos la oportunidad de facilitar transacciones que maximicen tus ganancias. Juntos, optimizaremos cada operación y generaremos experiencias positivas para todos. Si estás listo para aprovechar al máximo tu potencial y lograr resultados excepcionales, ¡nos encantaría contar contigo!
              </TextCustom>
            </div>
            <div className='buttongotocontact mt-4'>
              <Button
                icon={<ArrowRightIcon />}
                iconRight={true}
                onClick={functiongotocontact}
              >
                 Formar parte
              </Button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export { Chance };