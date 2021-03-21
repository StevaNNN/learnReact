import React, {useEffect} from 'react';
import './Person.scss';

const Person = (props) => {
    let { name, clicked, children, changed, age } = props;
    console.log('[Person.js] rendering...');
    return(
        
        <div className="Person">
            <p>I'm {name} and I am {age} years old.</p>
            <p onClick={clicked}>{children}</p>
            <input type="text" onChange={changed}value={name}/>
        </div>
    )
}


export default Person;