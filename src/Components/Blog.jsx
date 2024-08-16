import { TextAnimatedWrite } from "./textAnimated";
import { Grafic } from "./Grafic/Grafic";
import { Button } from './Button';
import { AngleRightDroprightIcon } from './Icons'

const Blog = ({ children }) => {
  const gotoServices = () => {
    return alert('this button redirect to page services')
  }
  return (
    <div className="container mx-auto flex flex-col items-center py-20">
      <div className="title-section max-w-4xl min-h-11  h-11 text-center mb-8">
        <TextAnimatedWrite stylesText={{
          color: '#7f7f7f',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>

          ¡Haz crecer tus ganancias con nuestros servicios! Te ayudaremos a maximizar tus beneficios para que logres resultados extraordinarios!
        </TextAnimatedWrite>
      </div>
      <div className="grafic-section w-full mb-8">
        <Grafic />
      </div>
      <div className="text text-center text-Primary max-w-2xl">
        <p>
          {children}
        </p>
      </div>
      <div className="button-section mt-5">
        <Button icon={<AngleRightDroprightIcon />} iconRight={true} FuctionButton={gotoServices}>
          Navegar blog
        </Button>
      </div>
    </div>
  );
}

export { Blog };