import React, {useContext} from 'react';
import {AlertContext} from '../context/alert/alertContext';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export const NotesList = ({notes, onRemove}) => {

    const {show} = useContext(AlertContext);

    const removeNote = (id) => {
        onRemove(id);
        show('Элемент удален','success');
    };

    return (
        <TransitionGroup consonent="ul" className="list-group">

            {notes.map((note) => (

                <CSSTransition
                    key={note.id}
                    classNames={'note'}
                    timeout={800}
                >

                    <li className="list-group-item note" >

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
                </CSSTransition>
            ))}

        </TransitionGroup>
    );
};

