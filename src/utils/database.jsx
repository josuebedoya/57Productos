import { useState, useEffect } from 'react';
import { insertData, getData, updateData } from 'management-supabase';
import { WarningModal } from '@/components/warningModal';

export const useDatabase = ( table ) => {

  const [ data, setData ] = useState( null );
  const [ loading, setLoading ] = useState( false );
  const [ error, setErr ] = useState( true );

  // get All
  const fetchAll = async () => {
    try {
      const res = await getData( table );
      setData( res );
    } catch ( err ) {
      setErr( err.message );
    } finally {
      setLoading( false );
    }
  };

  // init Fetch
  useEffect( () => fetchAll, [] );

  if ( error ) {
    return <WarningModal type='error'>
      { error.message }
    </WarningModal>
  }

  return { data, loading, error };
};