import React, {useContext, useEffect} from 'react';
import { Form } from '../components/Form';
import {NotesList} from '../components/NotesList';
import {FirebaseContext} from '../context/firebase/FirebaseContext';
import {Loader} from '../components/Loader'

export const Home = () => {

    const {
        showLoader, addNote, removeNote, fetchNotes,
        loading,
        notes} = useContext(FirebaseContext);

    useEffect (() => {
        fetchNotes();
    }, []);

  return (
      <>
         <Form />
         <br />

         { loading ? <Loader /> :  <NotesList notes={notes} onRemove={removeNote} /> }
      </>
  );
};
