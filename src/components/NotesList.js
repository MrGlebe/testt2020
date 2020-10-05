import React, {useContext} from 'react';
import {AlertContext} from '../context/alert/alertContext';

export const NotesList = ({notes, onRemove}) => {

    const {show} = useContext(AlertContext);

    const removeNote = (id) => {
        onRemove(id);
        show('Элемент удален','success');
    };

    return (
        <ul className="list-group">


            {notes.map((note) => (
                <li className="list-group-item note" key={note.id}>

                    <span>
                       <strong>{note.title}</strong>
                        <small>{new Date(note.date).toLocaleDateString()}</small>
                    </span>

                    <button type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => removeNote(note.id)}>
                        &times;
                    </button>

                </li>
            ))}

        </ul>
    );
};

