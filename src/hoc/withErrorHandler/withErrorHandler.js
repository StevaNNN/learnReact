import React, {Component} from "react";
import Modal from '../../Components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

// creating HOC with input of two args one is component it self and other is axios
const withErrorHandler = (WrappedComponent, axios) => {
    return(
        // anonymous class
        class extends Component {
            // error state
            state = {
                error : null
            }
            // on first function called after initializing this anonymous class => this is wrong componentDidMount
            // because cmpDidMount inside this anonymous cmp will only be triggered after cmpDidMount is called within child CMP
            // so wee need to call it before that either cmpWillMount as presented bellow or in constructor
            // creating interceptors
            componentWillMount() {
                console.log('[withErrorHandler] will mount ')
                // if our methods called with axios are successful we turn error state into null and not presenting dialog
                this.requestInterceptor = axios.interceptors.request.use(req => {
                    this.setState({ error: null });
                    //return request sent from axios THIS IS A MUST!
                    return req
                })
                // creating axios interceptor first callback simply returns the response and other sets state of this anonymous class state to what ever error interceptor gets
                this.responsetInterceptor = axios.interceptors.response.use(res => res, error => {
                   this.setState({ error: error })
                });
            }

            // we must clean our intereceptors when anonimous cmp will be destroyed
            // reduction of dead code
            componentWillUnmount() {
                axios.requestInterceptor.request.eject(this.requestInterceptor);
                axios.responsetInterceptor.response.eject(this.responsetInterceptor);
            }

            render() {
                return(
                    // we could use somewhat <></> React.Fragment
                    <Aux>
                        {/*collecting the props of the component which is passed as first argument
                        of our withErrorHandler HOC func this way we only allow props to the wrapped component to be used */}
                        <WrappedComponent {...this.props} />
                        <Modal
                            modalClosed={() => {this.setState({ error: null })}}
                            shown={this.state.error}
                        >
                            {this.state.error && this.state.error.message}
                        </Modal>
                    </Aux>
                );
            }
        }
    );
}

export default withErrorHandler;