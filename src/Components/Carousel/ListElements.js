import { MissionAndVision } from '../MissionAndVision/MissionAndVision';
import { Blog } from '../Blog';
import { Grafic } from '../Grafic/Grafic';


const getImages = require.context('../../Images', true, /\.(jpg|png)$/);

/* 
const Benefits = () => {
  const BestAcccesMarket = {
    img: getImages('./bestMarket.jpg'),
    title: 'Acceso a un Mercado Más Amplio',
    summary: 'podrás acceder a una red establecida y a diversos canales de distribución, lo que te permitirá llegar a un mercado más amplio y diverso.'
  }

  return (
    <>
      <div className='carosel'>
        <div className='image'>
          {BestAcccesMarket.img}
        </div>
        <div className='title'>
          {BestAcccesMarket.title}
        </div>
        <div className='summary'>
          {BestAcccesMarket.summary}
        </div>
      </div>
    </>
  )
}
 */
const  ListElements = [
  {
    Images: [
      { id: 1, element: getImages('./bestMarket.jpg') },
      { id: 2, element: getImages('./lessCost.jpg') },
      { id: 3, element: getImages('./onlineShopping.jpg') },
      { id: 4, element: getImages('./payment.jpg') }, 
    ],

    Benefits: [
      { id: 1, element: <Grafic /> },
      { id: 2, element: <Blog>holaa</Blog> },
      { id: 3, element: <MissionAndVision />},
    ],
  }
];

export default ListElements;