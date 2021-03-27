import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        // triggers as toogle should this cmp be updated or not
        // defaultly if this cmp Persons.js is instanciated in some parent cmp
        // if something changes in that parent cmp this cmp will rerender unneccesery
        // so we need to control this
        console.log('[Persons.js] shouldComponentUpdate')
        if ( nextProps.persons !== this.props.persons ) {
            return true;
        } else {
            return false;
        }
    }

    componentDidUpdate() {
        //triggers on every cmp update
        console.log('[Persons.js] componentDidUpdate')
    }

    componentWillUnmount() {
        // triggers when component is going to be destroyed
        console.log('[Persons.js] componentWillUnmount')
    }
    render() {
        console.log('[Persons.js] rendering...')
        const test = this.props.persons.map((p, index) => {
            return(
                <Person
                    age={ p.age }
                    name={ p.name }
                    key={ p.id }
                    changed={(event) => this.props.changed( event, p.id )}
                    clicked={this.props.clicked.bind(this, index)}
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
}

export default Persons;