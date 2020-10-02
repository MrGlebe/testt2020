import React, {useState, useContext} from 'react';
import {AlertContext} from '../context/alert/alertContext';

export const Form = () => {

    const [value, setValue] = useState('');
    const {show} = useContext(AlertContext);

    const submitHandler = (e) => {
        e.preventDefault();

        if (value.trim()) {
            show('Заметка создана', 'success');
            setValue('');
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
