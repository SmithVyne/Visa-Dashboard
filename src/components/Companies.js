import React, { useState } from 'react';
import Company from './Company';

export default function Companies({companies}) {
    const [clicked, setClicked] = useState([]);

    return (
        <div>
            {companies.map(({name, id}) => 
                <Company id={id} name={name} clicked={clicked} setClicked={setClicked} key={id} />
            )}
        </div>
    )
}
