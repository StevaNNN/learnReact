import React from 'react';
import './Person.scss';

const Person = (props) => {
    let { name, clicked, children, changed, age } = props;
    
    return(
        <div className="Person">
            <p>I'm {name} and I am {age} years old.</p>
            <p onClick={clicked}>{children}</p>
            <input type="text" onChange={changed}value={name}/>
        </div>
    )
}


export default Person;