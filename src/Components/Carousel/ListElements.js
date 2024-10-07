const getImages = require.context('../../Resources/Images', true, /\.(jpg|png)$/);

const ListElements = [

  { id: 1, element: getImages('./bestMarket.jpg') },
  { id: 2, element: getImages('./lessCost.jpg') },
  { id: 3, element: getImages('./onlineShopping.jpg') },
  { id: 4, element: getImages('./payment.jpg')},
];

export default ListElements;