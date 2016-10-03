import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        answer: 0,
        sign:0,
        number1:0,
        number2:0,
      };
  }
  render() {
    return (
      <div className="container">
      <div className='row'></div>
        <div className="row">
          <div className="col s12">
            <div className="card-panel z-depth-4 teal lighten-2">
              <span className=" white-text text-darken-2">{this.state.answer}</span>
            </div>
          </div>
          <div className='row'></div>
          <div className='row'></div>
          <div className="col s3 l1 offset-l4">
            <div className="card-panel blue-grey lighten-4" onClick={this.storesign.bind(this, '+')}>
              <span className="black-text text-darken-2" >+</span>
            </div>
          </div>
          <div className="col s3 l1">
            <div className="card-panel blue-grey lighten-4" onClick={this.storesign.bind(this, '-')}>
              <span className=" black-text text-darken-2" >-</span>
            </div>
          </div>
          <div className="col s3 l1">
            <div className="card-panel blue-grey lighten-4" onClick={this.storesign.bind(this, '*')}>
              <span className="black-text text-darken-2" >*</span>
            </div>
          </div>
          <div className="col s3 l1">
            <div className="card-panel blue-grey lighten-4" onClick={this.clearAll.bind(this)}>
              <span className="black-text text-darken-2">C</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s3 l1 offset-l4">
            <div className="card-panel blue-grey lighten-4" onClick={this.storenumber.bind(this, '1')}>
              <span className="black-text text-darken-2">1</span>
            </div>
          </div>
          <div className="col s3 l1">
            <div className="card-panel blue-grey lighten-4" onClick={this.storenumber.bind(this, '2')}>
              <span className="black-text text-darken-2" >2</span>
            </div>
          </div>
          <div className="col s3 l1">
            <div className="card-panel blue-grey lighten-4" onClick={this.storenumber.bind(this, '3')}>
              <span className="black-text text-darken-2" >3</span>
            </div>
          </div>
          <div className="col s3 l1">
            <div className="card-panel blue-grey lighten-4" onClick={this.storesign.bind(this, '/')}>
              <span className="black-text text-darken-2" >/</span>
            </div>
          </div>
        </div>

        <div className="row">
        <div className="col s3 l1 offset-l4">
          <div className="card-panel blue-grey lighten-4" onClick={this.storenumber.bind(this, '4')}>
            <span className="black-text text-darken-2">4</span>
          </div>
        </div>
        <div className="col s3 l1">
          <div className="card-panel blue-grey lighten-4" onClick={this.storenumber.bind(this, '5')}>
            <span className="black-text text-darken-2">5</span>
          </div>
        </div>
        <div className="col s3 l1">
          <div className="card-panel blue-grey lighten-4" onClick={this.storenumber.bind(this, '6')}>
            <span className="black-text text-darken-2">6</span>
          </div>
        </div>
        <div className="col s3 l1">
          <div className="card-panel blue-grey lighten-4" onClick={this.calculate.bind(this)}>
            <span className="black-text text-darken-2" >=</span>
          </div>
        </div>
        </div>

        <div className="row">
        <div className="col s3 l1 offset-l4">
          <div className="card-panel blue-grey lighten-4">
            <span className="black-text text-darken-2" onClick={this.storenumber.bind(this, '7')}>7</span>
          </div>
        </div>
        <div className="col s3 l1">
          <div className="card-panel blue-grey lighten-4" onClick={this.storenumber.bind(this, '8')}>
            <span className="black-text text-darken-2">8</span>
          </div>
        </div>
        <div className="col s3 l1">
          <div className="card-panel blue-grey lighten-4" onClick={this.storenumber.bind(this, '9')}>
            <span className="black-text text-darken-2">9</span>
          </div>
        </div>
        <div className="col s3 l1">
          <div className="card-panel blue-grey lighten-4" onClick={this.storenumber.bind(this, '0')}>
            <span className="black-text text-darken-2">0</span>
          </div>
        </div>
        </div>

      </div>
    );
  }

  clearAll(){
    this.setState({number1: 0});
    this.setState({number2:0});
    this.setState({sign:0});
    this.setState({answer:0});
  }

  calculate(){
    if(this.state.sign == '+'){
      this.setState({answer:Math.floor(this.state.number1) + Math.floor(this.state.number2)})
    }
    else if(this.state.sign == '-'){
      this.setState({answer:Math.floor(this.state.number1) - Math.floor(this.state.number2)})
    }
    else if(this.state.sign == '*'){
      this.setState({answer:Math.floor(this.state.number1) * Math.floor(this.state.number2)})
    }
    else if(this.state.sign == '/'){
      this.setState({answer:Math.floor(this.state.number1) / Math.floor(this.state.number2)})
    }
  }

  storesign(sign){
    this.setState({sign: sign});
  }

  storenumber(number){
    if(this.state.sign == 0){
      let newnum = this.state.number1 + number
      this.setState({number1: newnum});
      this.setState({answer:newnum});
    } else {
      let newnum = this.state.number2 + number
      this.setState({number2: newnum});
      this.setState({answer:newnum});
    }
  }
}
