import { MissionAndVision } from '@/templates/about/misionAndVision.jsx'
import { InfoAbout } from '@/templates/about/infoAbout.jsx'
import imgFruitFlat from '/images/img-fruit-flat.webp'

const About = () => {
  return ( <section className='page-about-us m-0 p-0 relative'>
    <InfoAbout/>
    <MissionAndVision/>
    <section id='ourHistory' className='py-14'>
      <div className='container mx-auto px-3'>
        <div className='top-section mb-5 tl:mb-12 flex items-center w-full'>
          <h1 className='title text-2xl tl:text-4xl text-Primary text-shadow-black capitalize'> Nuestra Historia</h1>
        </div>
        <div className='content-section text-15 tl:text-lg text-Primary w-full'>
          <p>
            En +57 Productos, nacimos con el propósito de transformar vidas y destacar la riqueza agrícola de Colombia.
            Todo comenzó al identificar la necesidad de nuestros campesinos de obtener un precio justo por su esfuerzo
            y garantizar que sus productos llegaran al mundo con la calidad y autenticidad que merecen.
          </p>
          <br/>
          <p>
            Desde entonces, hemos trabajado incansablemente para ser una empresa que no solo exporta productos
            agrícolas, sino que también acompaña a los agricultores en su camino hacia la excelencia. Brindamos
            herramientas, conocimientos y apoyo para que puedan cultivar de manera sostenible, respetando el medio
            ambiente y maximizando la calidad de sus cosechas.
          </p>
          <br/>
          <p>
            Entre nuestros productos estrella, el café ocupa un lugar especial. Este símbolo de tradición y orgullo
            colombiano es un claro reflejo de nuestro compromiso con la excelencia y la autenticidad. Sin embargo,
            nuestro trabajo no se detiene ahí: exportamos una amplia variedad de productos agrícolas que llevan la
            esencia de Colombia a los mercados internacionales, resaltando nuestra diversidad y riqueza natural.
          </p>
          <br/>
          <p>
            Hoy, somos más que una empresa exportadora. Somos un puente que conecta a los agricultores colombianos con
            el undo, asegurándonos de que cada envío cuente una historia de esfuerzo, dedicación y amor por nuestra
            tierra.
          </p>
          <br/>
          <h3 className='tracking-widest'>¡Cultivamos confianza, cosechamos futuro y llevamos Colombia al mundo!</h3>
        </div>
        <div className='img-section w-full flex justify-center  mt-6 tl:mt-12'>
          <img src={ imgFruitFlat } alt={ imgFruitFlat } className='img-flat rounded-3xl max-h-110 object-contain'/>
        </div>
      </div>
    </section>
  </section> )
};
export { About };