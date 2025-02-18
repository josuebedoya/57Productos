import { useState } from 'react';
import { insertData as addData, getData as fetchData, updateData } from 'management-supabase';

export const useDatabase = () => {

  const [ data, setData ] = useState( null );
  const [ loading, setLoading ] = useState( false );
  const [ successful, setSuccessful ] = useState( null );
  const [ showMessage, setShowMessage ] = useState( null );
  const [ error, setError ] = useState( null );

  // get Data
  const getData = async ( table, options = {} ) => {
    setLoading( true );
    try{
      const res = await fetchData( table, options );
      setData( res );
    }catch( err ){
      setError( err.message );
    }finally{
      setLoading( false );
    }
  };

  // insert new data

  const insertData = async ( table, data ) => {
    setShowMessage( false );  // close modal
    try{
      await addData( table, data );
      setSuccessful( true );
    }catch( error ){
      setError( error.message );
      setSuccessful( false );
    }finally{
      setShowMessage( true ); // open modal
    }
  };

  return { data, loading, successful, showMessage, error, getData, insertData };
};