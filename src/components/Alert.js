import React, {useContext}  from 'react';
import {AlertContext} from '../context/alert/alertContext';

export const Alert = () => {

    const {hide, alert} = useContext(AlertContext);

    if (!alert.visible) {
        return null;
    }

    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
            <strong>Внимание! </strong>
            {alert.text}

            <button onClick={hide} type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};


