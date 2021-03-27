import React, { useEffect, useRef } from 'react';
import './Cockpit.scss';

const Cockpit = (props) => {
    const toggleBtnRef = useRef();

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')// works like shouldComponentUpdate
        }
    }, []);

    console.log('[Cockpit.js] rendereing....');

    return (
        <>
            <div>Toogle persons list with button below</div>
            <button
                ref={toggleBtnRef}
                className={`Cockpit-btn ${props.active ? 'active': ''}`}
                onClick={props.clicked}>
                    Toogle persons visibility
            </button>
        </>
    );
}

export default React.memo(Cockpit);