import React, {Component} from 'react';
import './Person.scss';

class Person extends Component {
    // FIRST WAY OF ACCESSING REF
    inputElRef;

    // FIRST WAY OF ACCESSING REF
    // componentDidMount() {
    //     console.log(this.inputElRef)
    // }

   // SECOND WAY OF ACCESSING REF
   // react offers us React.createRef() for creating refs
   // difference is that the class prop whatEverNamed needs to bee accessed with .current as presented below
    constructor(props) {
        super(props)
        this.inputElRef = React.createRef();
    }

    // SECOND WAY OF ACCESSING REF
    componentDidMount(){
        console.log(this.inputElRef.current)
    }

    render() {
        console.log('[Person.js] rendering...');
        const { name, clicked, children, changed, age } = this.props;
        
        return(
            <div className="Person">
                <p>I'm {name} and I am {age} years old.</p>
                <p onClick={clicked}>{children}</p>
                <input 
                    type="text" 
                    onChange={changed}
                    value={name} 
                    // FIRST WAY OF ACCESSING REF
                    // accessing ref in this way simply takes anonimus function and passes element as argument and then assigning that argument to the class property
                    // ref={(inputic) => {this.inputElRef = inputic}}

                    // SECOND WAY OF ACCESSING REF
                    // simply tell react that this.inputElRef is ref
                    ref={this.inputElRef}
                />
            </div>
        );
    }
}


export default Person;