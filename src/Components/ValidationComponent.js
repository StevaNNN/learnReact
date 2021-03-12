import React from 'react';

const ValidationComponent = ( props ) => {

    let { textLength } = props

    let validationText = "Text to small"

    if(textLength >= 5) {
        validationText = "Text long enough";
    }

    return (
        <div>
            {validationText}
        </div>
    );
};

export default ValidationComponent;
