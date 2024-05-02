import React, { useState } from 'react';

function TextInput() {
    const [value, setValue] = useState()
    const handleChange = (event) => {
        setValue(event.target.value);
        }        
    return ( 
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <div>{value}</div>
        </div>
     );
}

export default TextInput;