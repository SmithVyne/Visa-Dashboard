import React from 'react';

export default function Documents({documents}) {
    return (
        <>
            {documents.map(document => 
                <td>
                    {document.visa_template_document.name}
                </td>
            )}
        </>
    )
}
