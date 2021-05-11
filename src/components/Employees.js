import React, { useContext } from 'react';
import Documents from './Documents';
import {employeesContext} from './App';

export default function Employees() {
    
    const employees = useContext(employeesContext);
    
    return (
        <table >
            {employees.map(({name, documents}) => 
                <tr>
                    <td id="user">
                        {name}
                    </td>
                    <Documents documents={documents} />
                </tr>
            )}
        </table>
    )
}
