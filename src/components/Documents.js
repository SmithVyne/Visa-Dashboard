import React, {useContext} from 'react';
import {employeesContext} from './App';
import {findDocumentsIds} from '../utils';


export default function Documents({documents}) {
    const {headerIds} = useContext(employeesContext);
    const documentsIds = findDocumentsIds(documents);
    
    return (
        <>
            {headerIds.map(id => {
                    let documentId = documentsIds.findIndex(idn => idn === id)
                    if(documentId === -1) {
                        return <td>Not Assigned</td>
                    } else {                        
                        return <td>{documents[documentId].visa_template_document.name}</td>
                    }
                }
            )}
        </>
    )
}
