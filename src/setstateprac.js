import React from 'react';

const green = '#39D1B4';
const yellow = '#FFD712';

export class ToggleColor extends React.Component{

    constructor(prop){
        super(prop);
        this.state = {color: green};
        //this.changeColor = this.changeColor.bind(this);

    }

    changeColor=()=>{
        let newColor = this.state.color == green ? yellow : green;
        this.setState({ color: newColor });
    }
    render(){
        return(
            <div style={{background : this.state.color}}>
                <h1>Change color</h1>
                <button onClick={this.changeColor}>click me</button>
            </div>
        );
    }
}