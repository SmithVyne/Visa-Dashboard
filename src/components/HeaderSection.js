import React from 'react';

export default function HeaderSection({name, documents}) {
    return (
        <div className="header-section">
            <div className="header-section-title">{name}</div>
            <div className="header-section-body">
                {documents.map(({id, name, uuid}) => 
                    <span className="cell" key={uuid}>
                        {`${name} (${id})`}
                    </span>
                )}
            </div>
        </div>
    )
}
