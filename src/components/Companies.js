import React, { useState } from 'react';
import Company from './Company';

export default function Companies({companies}) {
    const [clicked, setClicked] = useState([]);

    const handleClick = (id) => {
        if (clicked.includes(id)) {
            setClicked(clicked.filter(ids => ids !== id));
        } else {
            setClicked([...clicked, id])
        }
    };

    return (
        <div id="companies">
            {companies.map(({name, id}) => 
                <Company id={id} name={name} clicked={clicked} handleClick={() => handleClick(id)} key={id} />
            )}
        </div>
    )
}
