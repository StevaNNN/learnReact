import React from "react";
import classes from './Modal.module.scss';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        // we are only re-rendering this component if props SHOWN or CHILDREN are not the same between current and next props
        return nextProps.shown !== this.props.shown || nextProps.children !== this.props.children;
    }

    componentDidUpdate() {
        console.log('[Modal] did update')
    }

    render() {
        return(
            <Aux>
                <Backdrop
                    shown={this.props.shown}
                    clicked={this.props.modalClosed}
                />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.shown ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.shown ? 1 : 0
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;