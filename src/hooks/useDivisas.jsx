import axios from 'axios';

/**
 * @param rate - This receives the format to relation
 * @return  -  Return object with rates ( e.g.{ 'COP' : 10000 } )
 *
 */

const getExchangeRates = async ( exchangeRates = 'COP,MXN' ) => {
  // const endPointMiaaa = `https://apilayer.net/api/live?access_key=94f127cd92602145e29fa9d859907371&currencies=${ exchangeRates }&source=USD&format=1`;
  const endPoint = `https://apilayer.net/api/live?access_key=94f127cd92602145e29fa9d8599073453451&currencies=${ exchangeRates.trim() }&source=USD&format=1`;
  try {
    const res = await axios.get( endPoint );
    // Get  rates
    return {
        "USDEUR": 0.87499,
        "USDGBP": 0.749919,
        "USDJPY": 141.430501,
        "USDCOP": 1,
        "USDUSD": 5000,
        "USDAUD": 1.567955,
        "USDCAD": 1.38192
    }
    // return res.data.quotes;
  } catch ( error ) {
    return <div>Error: { error.message }</div>;
  }
};

export { getExchangeRates };