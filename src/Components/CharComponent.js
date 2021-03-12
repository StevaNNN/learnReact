import React from 'react';

const CharComponent = ( props ) => {

    const { char, click } = props;

    const cssStyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }

    return (
        <div style={{...cssStyle}} onClick={click}>
            {char}
        </div>
    );
};

export default CharComponent;