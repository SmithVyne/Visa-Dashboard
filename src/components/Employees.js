import React, { useContext } from 'react';
import {employeesContext} from './App';
import Employee from './Employee';

export default function Employees() {
    
    const {employees} = useContext(employeesContext);
    
    return (
        <div className="employees">
            {employees.map(({name, documents}) => 
                <Employee name={name} documents={documents} />
            )}
        </div>
    )
}
