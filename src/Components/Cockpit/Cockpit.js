import React from 'react';
import './Cockpit.scss';

const Cockpit = (props) => {

    return (
        <>
            <div>Toogle persons list with button below</div>
            <button className="Cockpit-btn" onClick={props.clicked}>Toogle persons visibility</button>
        </>
    );
}

export default Cockpit;