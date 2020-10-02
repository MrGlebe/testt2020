import React from 'react';
import { Form } from '../components/Form';
import {NotesList} from '../components/NotesList';

export const Home = () => {

    const notes = new Array(3).fill('').map((item, i) => ({id: i + 1, title: `Item ${i + 1}`, data: (new Date).toLocaleDateString()}));

  return (
      <>
         <Form />
         <br />
         <NotesList notes={notes} />
      </>
  );
};
