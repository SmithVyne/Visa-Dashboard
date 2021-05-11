import React from 'react';
import Employees from './Employees';

export default function Company({clicked, handleClick, id, name}) {
    
    return (
        <>
            <div onClick={handleClick} className="cell company">
                <i className={clicked.includes(id) ? 'fas fa-chevron-circle-down' : 'fas fa-chevron-circle-right'}></i>
                <span className="company-title">{name}</span>
            </div>
            { clicked.includes(id) && 
                <Employees />
            }
        </>
    )
}
