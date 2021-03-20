import React, { Component } from 'react';
import Persons from './Components/Persons/Persons';
import Cockpit from './Components/Cockpit/Cockpit';
import './App.scss';

class App extends Component {

    state = {
        persons : [
            { id: '123', name: "Ljilja", age: 100 },
            { id: '456', name: "Nena", age: 30 },
            { id: '789', name: "Steva", age: 28 }
        ],
        showPersons: true
    }

    deletePersonHandler = ( personID ) => {
        const persons = [...this.state.persons];
        persons.splice(personID, 1); // deleting array from id by 1 basicly delete currently clicked person
        this.setState({ persons: persons });
    }
  
    inputChanged = ( event, id ) => {
        const persons = [...this.state.persons]; // creating copy of the persons array stored in component state
        const personIndex = persons.findIndex(p => {return p.id === id});  // collecting ID of person
        const person = {...this.state.persons[personIndex]}; // each person object and its values
        person.name = event.target.value; // updating specific person object with values get from input
        persons[personIndex] = person; // updating copy array of persons with newly updated person object
        this.setState({persons: persons}); // update the state of persons array of component
        // the trick here is to understand the flow in which method is working:
        // 1. fetch id 
        // 2. collect the specific person object
        // 3. update that specific person object name property with one from input
        // 4. than we update the copy of persons array fetched before with person object which has name property changed
        // 5. after simply setState to the newly updated persons array
    }
  
    onButtonClick = () => {
        let { showPersons } = this.state;
        this.setState({ showPersons: !showPersons });
    }
  
    render() {
        const { showPersons, persons } = this.state;
        let personss = null;

        if(showPersons) {
            personss = (
                <div>
                    <Persons
                        persons={persons}
                        clicked={this.deletePersonHandler}
                        changed={this.inputChanged}
                    />
                </div>
            );
        }
  
        return(
            <div className="App">
                <Cockpit clicked={this.onButtonClick}/>
                {personss}
            </div> 
        )
    }
}

export default App;