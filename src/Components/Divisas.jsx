import { useEffect, useState } from "react";
import axios from "axios";

const Divisas = ({ setRates }) => {
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get('https://v6.exchangerate-api.com/v6/add9f62cd530df96b79b5bd3/latest/USD');
        const conversionRates = response.data.conversion_rates;
        setRates(conversionRates); // receive prop here
      } catch (error) {
        setError(error);
      }
    };

    fetchRates();
  }, [ setRates ]);

  if (error) return <div>Error: {error.message}</div>;

  return null;
};

export { Divisas };