import React from 'react';

export const NotesList = ({notes}) => {

    return (
        <ul className="list-group">

            {notes.map((note) => (
                <li className="list-group-item note" key={note.id}>

                    <span>
                       <strong>{note.title}</strong>
                        <small>{note.data}</small>
                    </span>

                    <button type="button"
                            className="btn btn-outline-danger btn-sm">
                        &times;
                    </button>

                </li>
            ))}

        </ul>
    )
};
