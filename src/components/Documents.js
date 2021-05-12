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
                        return <span className="cell">Not assigned</span>
                    } else {                        
                        return <span className="cell">
                            {documents[documentId].visa_template_document.name}
                        </span>
                    }
                }
            )}
        </>
    )
}
