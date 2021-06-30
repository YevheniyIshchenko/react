import React from 'react';

const ON = 'On';
const OFF = 'Off'

class Toggler extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: OFF,
        }
    }

    setButtonText = () =>{
        this.setState({
             text: this.state.text === OFF ? this.state.text = ON : this.state.text = OFF,
        })
    }

render(){
    return(
        <div className="toggler">
            <button 
             onClick={() => this.setButtonText()} className="button">{this.state.text}</button>
        </div>
    )
}
}





export default Toggler;