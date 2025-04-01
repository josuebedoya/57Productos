import { createContext, useState, useContext, useEffect } from 'react';
import { useDatabase } from "@/utils/database.jsx";

const CommentContext = createContext();

const CommentProvider = ( { children } ) => {
  const [ comments, setComments ] = useState( [] );
  const [ localComments, setLocalComments ] = useState( [] );
  const [ isLiked, setIsLiked ] = useState( false );
  const [ isDontLiked, setIsDontLiked ] = useState( false );
  const { data, successful, showMessage, loading, error, get, insert, update } = useDatabase();

  useEffect( () => {
    get( 'comments_users' );
  }, [] ); // get Comments

  useEffect( () => {

    setComments( data?.['comments_users'] );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ data?.['comments_users'] ] ); // update comments

  const addMessage = ( message, name ) => { // add new comment
    if( message && name ){
      insert( 'comments_users', { name: name, comment: message } );
      setLocalComments( prevComment => [ ...prevComment, { name: name, comment: message, likes: 0, dont_likes: 0 } ] );
    }
  };

  // Qualification comment
  const rateLike = async ( id, qualification = {} ) => {

    // prevent more of one reaction
    if ((qualification.likes && isLiked) || (qualification.dont_likes && isDontLiked)) {
      return;
    }

    // handle states option like
    if( qualification.likes ){
      setIsLiked( true );
      setIsDontLiked( false );
    }else{
      setIsDontLiked( true );
      setIsLiked( false );
    }

    // update  new qualification
    update( 'comments_users', qualification, 'id', id );

    // update local qualification per comment
    const newComments = comments.map( c => c.id === id ? { ...c, ...qualification }: c );

    setLocalComments( newComments );
  };

  return ( <CommentContext.Provider
    value={ {
      localComments, comments, successful, showMessage, loading, error, addMessage, rateLike
    } }>
    { children }
  </CommentContext.Provider> );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useComment = () => {
  return useContext( CommentContext );
}

export { CommentProvider };