import React from 'react';

export default function HeaderSection({name, documents}) {
    return (
        <div className="section cell">
            <div className="section-title cell">{name}</div>
            <div className="section-body cell">
                {documents.map(({id, name, uuid}) => 
                    <span className="cell" key={uuid}>
                        {`${name} (${id})`}
                    </span>
                )}
            </div>
        </div>
    )
}
