import React from 'react';
import { Child } from './childStateless';

export class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
  this.changeName = this.changeName.bind(this);  
  }
  changeName(newName) {
  this.setState({
    name: newName
  });
}

  render() {
    return <Child onChange={this.changeName} name={this.state.name} />
  }
}

