import React, { Component } from 'react';
import Person from './Components/Person/Person';
import './App.scss';

class App extends Component {

    state = {
        persons : [
            { id: 'asdf', name: "Ljilja", age: 100 },
            { id: 'fghj', name: "Nena", age: 30 },
            { id: 'qwerty', name: "Steva", age: 28 }
        ],
        showPersons: true
    }
  
    // switchNameHandler = ( newName ) => {
    //   this.setState({
    //     persons : [
    //         { name: "Ljilja", age: 100 },
    //         { name: "Nena", age: 30 },
    //         { name: newName, age: 28 }
    //     ]
    //   });
    // }

    deletePersonHandler = ( personID ) => {
        const persons = [...this.state.persons];
        persons.splice(personID, 1); // deleting array from id by 1 basicly delete currently clicked person
        this.setState({persons: persons});
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

        const btnStyles = {
            border: '1px solid black',
            background: 'grey',
            color: 'white',
            padding: '.5em',
            fontSize: '1em'
        }
  
        const { showPersons } = this.state;
  
        let personss = null;

        if(showPersons) {
            personss = (
                <div>
                    {this.state.persons.map((person) => {
                        return (
                            <Person
                                key={person.id}
                                age={person.age}
                                name={person.name}
                                changed={(event) => this.inputChanged(event, person.id)}
                                click={this.deletePersonHandler.bind(this, person.id)}
                            >
                                Clicking here will delete person
                            </Person>
                        );
                    })}
                </div>
            );
        }
  
        return(
            <div className="App">
                <button style={{...btnStyles}}onClick={this.onButtonClick}>Toogle persons visibility</button>
                {personss}
            </div> 
        )
    }
}

export default App;