import React, { useEffect } from 'react';
import './Cockpit.scss';

const Cockpit = (props) => {

    // useEffect(() => {
    //     console.log('[Cockpit.js] useEffect')
    // })
    console.log('[Cockpit.js] rendereing....')
    return (
        <>
            <div>Toogle persons list with button below</div>
            <button className={`Cockpit-btn ${props.active ? 'active': ''}`} onClick={props.clicked}>Toogle persons visibility</button>
        </>
    );
}

export default Cockpit;