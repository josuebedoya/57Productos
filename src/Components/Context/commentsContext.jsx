import { createContext, useState, useContext } from "react";

const CommentContext = createContext();

const CommentProvider = ({ children }) => {
  const [ comments, setComments ] = useState( [] );

  const addMessage = ( message ) => {
    if ( message ) {
      setComments(( prev ) => [ ...prev, message ]);
    }
  };

  return (
   <CommentContext.Provider value={{  comments, addMessage }}>
     { children }
   </CommentContext.Provider>
  );
};

export const useComment = () => {
  return useContext( CommentContext );
}

export { CommentProvider };