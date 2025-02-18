import { createContext, useState, useContext, useEffect } from 'react';
import { updateData } from 'management-supabase';
import  { useDatabase } from "@/utils/database.jsx";

const CommentContext = createContext();

const CommentProvider = ( { children } ) => {
  const [ comments, setComments ] = useState( [] );
  const [ localComments, setLocalComments ] = useState( [] );
  const  { data, getData, insertData} =  useDatabase();

  useEffect( () => {
  getData( 'comments_users' );
  }, [] ); // get Comments

  useEffect( () => {
    setComments(data);
  }, [data] ); // update comments

  const addMessage = ( message, name ) => { // add new comment
    if ( message && name ) {
      insertData( 'comments_users', { name: name, comment: message } );
        setLocalComments( prevComment => [ ...prevComment, { name: name, comment: message, like: 0, dont_like: 0 } ] );
    }
  };

  const rateLike = async (id, qualification) =>{
    try {
      await updateData('comments_users',
       {likes: qualification, dont_likes: qualification},
       'id',
       id
      );
    }catch ( error ){
      return <div>Algo ha fallado: { error.message }</div>;
    }
  };

  return (
   <CommentContext.Provider value={ { localComments, comments, addMessage, rateLike } }>
     { children }
   </CommentContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useComment = () => {
  return useContext( CommentContext );
}

export { CommentProvider };