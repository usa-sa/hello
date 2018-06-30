import React, { Component } from 'react';
class SayHello extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
        <div>
            <h1>สวัสดีคะคุณ {this.props.name}</h1>
            <h1>อายุคุณคือ {this.props.age} ปี</h1>

        </div>
            
        );
    }
}

export default SayHello;