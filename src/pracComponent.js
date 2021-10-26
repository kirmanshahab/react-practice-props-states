import React from 'react';

export class Comp1 extends React.Component{
    render(){
        return(
            <div>
                <h1>hello {this.props.name}</h1>
                <h2>age: {this.props.age}</h2>
            </div>
        );
    }
}