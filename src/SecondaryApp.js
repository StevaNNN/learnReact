import React, { Component } from 'react';
import CharComponent from './Components/CharComponent';
import ValidationComponent from './Components/ValidationComponent';

class SecondaryApp extends Component {
    
    state = {
        text: '',
        arrayOfChars: []
    }

    onInptChange = ( event ) => {
        const { text, arrayOfChars } = this.state;
        let userInputText = event.target.value;
        const newCharArray = [...arrayOfChars];
        newCharArray.push(userInputText.split(''));
        this.setState({ text: userInputText, arrayOfChars: newCharArray});
    }

    onCharClick = ( id ) => {
        const newArray = [...this.state.arrayOfChars];
        newArray.splice(id, 1);
        this.setState({ arrayOfChars: newArray });
    }

    render() {
        const { text, arrayOfChars } = this.state;

        let CharComponentRender = arrayOfChars.map((char, index) => {

            return(
                <CharComponent char={char[index]} key={index} click={this.onCharClick.bind(this, index)} />
            )
        });
         
        return (
            <>
                <input type="text" value={text} onChange={this.onInptChange} />
                <p>{text.length}</p>
                <ValidationComponent textLength={text}/>
                {CharComponentRender}
            </>
        );
    }
}

export default SecondaryApp;