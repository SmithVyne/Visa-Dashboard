import React from 'react';
import Documents from './Documents';

export default function Employee({name, documents}) {
    return (
        <div className="employee">
            <span className="cell name">
                {name}
            </span>
            <Documents documents={documents} />
        </div>
    )
}
