import React from 'react';

const ValidationComponent = ( props ) => {

    let { textLength } = props

    return (
        <div>
            { textLength.length + 1 <= 5 ? 'Text to small': 'Text long enough' }
        </div>
    );
};

export default ValidationComponent;