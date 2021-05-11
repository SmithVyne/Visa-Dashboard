import React from 'react';
import Employees from './Employees';

export default function Company({clicked, setClicked, id, name}) {
    return (
        <>
            <div onClick={() => setClicked(id)} className="cell company">
                <i className={clicked === id ? 'fas fa-chevron-circle-down' : 'fas fa-chevron-circle-right'}></i>
                <span className="company-title">{name}</span>
            </div>
            { clicked === id && 
                <Employees />
            }
        </>
    )
}
