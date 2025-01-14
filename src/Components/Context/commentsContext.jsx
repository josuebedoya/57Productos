import { createContext, useState, useContext, useEffect } from "react";
import { insertData, getData } from "management-supabase";

const CommentContext = createContext();

const CommentProvider = ({ children }) => {
  const [ comments, setComments ] = useState( [] );
  const [ localComments, setLocalComments ] = useState( [] );
  useEffect( () => {
    console.log(comments + 'comments')
  }, [] );

  const fetchComments = async () => {  // get Comments
    try {
      const res = await getData( 'comments_users' );
      console.log(res)
      setComments( res );
    } catch ( err ) {
      console.log( err.message );
      return <div> No se pudo completar el proceso de obtención</div>
    }
  };

  useEffect( () => {
    fetchComments();
    console.log(comments)
  }, [] );

  const addMessage = async ( message, name ) => { // add new comment
    if ( message && name) {
      try {
        await insertData( 'comments_users', { name: name, comment: message });
        setLocalComments(prevComment => [...prevComment, {name: name, value: message}])
      } catch ( err ) {
        console.log( err.message );
        return <div> No se pudo completar el proceso de envio.</div>
      }
    }
  };

  return (
   <CommentContext.Provider value={{localComments, comments, addMessage }}>
     { children }
   </CommentContext.Provider>
  );
};

export const useComment = () => {
  return useContext( CommentContext );
}

export { CommentProvider };