import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ResultsContext = createContext();

const ParamsUrlProvider = ( {  children } ) => {
  const [ searchParams ] = useSearchParams();
  const [ termToGet, setTermToGet ] = useState( "search" );
  const [ query, setQuery ] = useState( searchParams.get( termToGet) || "" );

   // Get params
  useEffect( () => {
    setQuery( searchParams.get( termToGet ) || "" );
  }, [ searchParams ] );

  return (
   <ResultsContext.Provider value={ { query, setTermToGet, termToGet } }>
     { children }
   </ResultsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useResults = () => {
  return useContext( ResultsContext );
};

export { ParamsUrlProvider };