import { useState } from 'react';
import { getData, getFile, insertData, updateData } from 'management-supabase';

export const useDatabase = () => {

  const [ data, setData ] = useState( null );
  const [ loading, setLoading ] = useState( false );
  const [ successful, setSuccessful ] = useState( null );
  const [ showMessage, setShowMessage ] = useState( null );
  const [ error, setError ] = useState( null );

  // get Data
  const get = async ( table, options = {} ) => {
    setLoading( true );
    try{
      const res = await getData( table, options );

      setData( res );
    }catch( err ){
      setError( err.message );
    }finally{
      setLoading( false );
    }
  };

  // insert new data
  const insert = async ( table, data ) => {
    setShowMessage( false );  // close modal
    try{
      await insertData( table, data );
      setSuccessful( true );
    }catch( error ){
      setError( error.message );
      setSuccessful( false );
    }finally{
      setShowMessage( true ); // open modal
    }
  };

  // update Data
  const update = async ( table, data, where, valueWhere ) => {
    setShowMessage( false );
    try{
      await updateData( table, data, where, valueWhere );
      setSuccessful( true );
    }catch( error ){
      setError( error.message );
      setSuccessful( false );
    }finally{
      setShowMessage( true );
    }
  }

  // Get files
  const getFiles = async ( src, name, options = {} ) => {
    setLoading( true );
    try {
      return await getFile( src, name, options );
    } catch ( err ) {
      setError( err.message );
    } finally {
      setLoading( false );
    }
  };

  return { data, loading, successful, showMessage, error, get, insert, update, getFiles };
};