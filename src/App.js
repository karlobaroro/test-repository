import React, { Component } from 'react';

class App extends Component {
  state = {
    name: "Karlo",
    age: 23,
    department: "IT"
  }

  updateDepartment = () => {
    this.setState({
      department:"HR"
    });
  };

  render() {
    return (
      <div>
        <h1>Information</h1>
        <div>
          <p>Name: {this.state.name}</p>
          <p>Age: {this.state.age} </p>
          <p>Department: {this.state.department}</p>
        </div>
        <button onClick={this.updateDepartment}>Update</button>
      </div>
    );
  }
}

export default App;