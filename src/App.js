import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Form from "./Form";
import Table from "./Table";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      date: "08/01/2020", 
      type: "Cash", 
      location: "McDonald's", 
      description: "Lunch", 
      amount: "7.50"
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Table date={this.state.date} type={this.state.type} location={this.state.location} description={this.state.description} amount={this.state.amount}/>
      </div>
    );
  }
}

export default App;
