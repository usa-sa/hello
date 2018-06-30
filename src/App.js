import React, { Component } from 'react';

import './App.css';
import SayHello from './components/SayHello';
import Boder from './components/ฺBoder';

class App extends Component {
  constructor(){
    super();
    this.state ={
      name: "usa",
      age: 23
    };
  }
  // เพิ่มอายุ
  incrementAge(){
    this.setState({age:this.state.age+1})
  }
  // ลดอายุ
  DecrementAge(){
    this.setState({age:this.state.age-1})
  }
 
  render() {
    return (
      <div className="App">
      {/* ส่งแบบprops */}
      <SayHello name={this.state.name} age = {this.state.age}></SayHello>
      

      <p>Hello, {this.state.name}</p>
      <p>age, {this.state.age}</p>

      <div
         style={{
           width: this.state.age,
           border: 2,
           borderStyle: "solid",
           color: "#deab53"
         }}
       />
       
      <Boder>
      <button onClick={() => this.incrementAge()}>เพิ่มอายุ</button>{" "}
      <button onClick={() => this.DecrementAge()}>ลดอายุ</button>
      </Boder>

      

      </div>
      

    );
  }
}

export default App;
