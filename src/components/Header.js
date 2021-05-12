import React from 'react';
import HeaderSection from './HeaderSection';

export default function Header({header}) {
    return (
        <div id="header">
            <div className="cell">User</div>
            {header.map(({uuid, name, visa_template_documents}) => 
                <HeaderSection key={uuid} name={name} documents={visa_template_documents} />
            )}
        </div>
    )
}
