import { createContext, useState, useContext, useEffect } from 'react';
import { insertData, getData, updateData } from 'management-supabase';

const CommentContext = createContext();

const CommentProvider = ( { children } ) => {
  const [ comments, setComments ] = useState( [] );
  const [ localComments, setLocalComments ] = useState( [] );
  const [ error, setError ] = useState( null );

  useEffect( () => {
    const fetchComments = async () => {  // get Comments
      try {
        const res = await getData( 'comments_users' );
        setComments( res );
      } catch ( err ) {
        setError( err.message );
      }
    };
    fetchComments();
  }, [] );

  const addMessage = async ( message, name ) => { // add new comment
    if ( message && name ) {
      try {
        await insertData( 'comments_users', { name: name, comment: message } );
        setLocalComments( prevComment => [ ...prevComment, { name: name, comment: message, like: 0, dont_like: 0 } ] )
      } catch ( err ) {
        setError( err.message );
      }
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

  if ( error ) {
    console.log( error.message )
    return <div>Algo ha fallado: { error.message }</div>;
  }

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