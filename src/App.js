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
        showPersons: false,
        cockpitRemoved: false
    }

    deletePersonHandler = ( personID ) => {
        const persons = [...this.state.persons];
        persons.splice(personID, 1); // deleting array from id by 1 basicly delete currently clicked person
        this.setState({ persons: persons });
    }
  
    inputChanged = ( event, id ) => {
        const persons = [...this.state.persons]; // creating copy of the persons array stored in component state
        const personIndex = persons.findIndex(p => {return p.id === id});  // collecting ID of person and return that id to the personIndex variable if matches id from argument
        const person = {...this.state.persons[personIndex]}; // specific person object collected from id argumnet of method and its key values pairs
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
  
    shouldComponentUpdate(nextProps, nextState) {
        return true
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
                <button onClick={()=> this.setState({cockpitRemoved : !this.state.cockpitRemoved})}>remove Cockpit</button>
                {!this.state.cockpitRemoved ? <Cockpit clicked={this.onButtonClick} active={showPersons}/> : null}
                {personss}
            </div> 
        )
    }
}

export default App;