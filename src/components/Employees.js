import React, { useContext } from 'react';
import Documents from './Documents';
import {employeesContext} from './App';

export default function Employees() {
    
    const {employees} = useContext(employeesContext);
    
    return (
        <div className="employees">
            {employees.map(({name, documents}) => 
                <div className="employee">
                    <span className="cell name">
                        {name}
                    </span>
                    <Documents documents={documents} />
                </div>
            )}
        </div>
    )
}
