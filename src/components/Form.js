import React, {useState, useContext} from 'react';
import {AlertContext} from '../context/alert/alertContext';
import {FirebaseContext} from '../context/firebase/FirebaseContext';

export const Form = () => {

    const [value, setValue] = useState('');
    const { show } = useContext(AlertContext);
    const { addNote } = useContext(FirebaseContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (value.trim()) {

            try {
                await addNote(value.trim());
                show('Заметка создана', 'success');
                setValue('');
            } catch(e) {

                (show('Ошибка создания заметки', 'danger'));
            }

        } else {
            show('Введите заметку');
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="from-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter note name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </form>
    );
};
