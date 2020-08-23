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
      expenses: [
        {
          date: "08/01/2020", 
          type: "Cash", 
          location: "McDonald's", 
          description: "Lunch", 
          amount: "7.50"
        }
        
      ]
    }
    this.addExpense = this.addExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addExpense(){
    console.log("Test")
    this.setState(function(prevState){
      return(
      prevState.expenses.push({
        date: this.state.expenses.date, 
        type: this.state.expenses.type,
        location: this.state.expenses.location, 
        description: this.state.expenses.description, 
        amount: this.state.expenses.amount
      })
      )
    })
    console.log(this.state.expenses)
  }

  handleChange(event){
    const {name, value} = event.target;
    this.setState({
      [name] : value
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form expenses={this.state.expenses} addExpense={this.addExpense} handleChange={this.handleChange}/>
        <Table expenses={this.state.expenses}/>
      </div>
    );
  }
}

export default App;
