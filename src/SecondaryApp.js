import React, { Component } from 'react';
import CharComponent from './Components/CharComponent';
import ValidationComponent from './Components/ValidationComponent';

class SecondaryApp extends Component {
    
    state = {
        text: ''
    }

    onCharClick = ( id ) => {
        const { text } = this.state;
        const temp = text.split('');/// splitting this.state.text string into array of characters
        temp.splice(id, 1); // removing specific character from array of characters collected above
        const anotherTemp = temp.join(''); // creating string from array of characters
        this.setState({
            text: anotherTemp
        })
    }

    onInptChange = (e) => {
        this.setState({text: e.target.value});
    }

    render() {
        const { text } = this.state;
        //looping trough each character of string user entered
        const CharComponentRender = text.split('').map((char, index) => {

            return(
                <CharComponent
                    char={char}
                    key={index}
                    click={this.onCharClick.bind(index)}
                />
            )
        });
         
        return (
            <>
                <input type="text" value={text} onChange={this.onInptChange} />
                <p>{text}</p>
                <ValidationComponent textLength={text.length}/>
                {CharComponentRender}
            </>
        );
    }
}

export default SecondaryApp;
