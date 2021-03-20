import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {

    const test = props.persons.map((p, index) => {
        
        return(
            <Person
                age={ p.age }
                name={ p.name }
                key={ p.id }
                changed={(event) => props.changed( event, p.id )}
                clicked={props.clicked.bind(this, index)}
            >
                Clicking here would remove this person
            </Person> 
        );
    });

     return(
        <>
            {test}
        </>
    )
}

export default Persons;