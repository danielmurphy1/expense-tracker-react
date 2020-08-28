import React from 'react';
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
          id: Math.random(),
          date: "", 
          type: "", 
          location: "", 
          description: "", 
          amount: ""
        }
        
      ]
    }
    this.addExpense = this.addExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  addExpense(event){
    event.preventDefault();
   
    let newExpense = {
      id: Math.random(),
      date: this.state.date,
      type: this.state.type, 
      location: this.state.location,
      description: this.state.description,
      amount: this.state.amount
    }
    this.setState({
      expenses: [...this.state.expenses, newExpense]
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

  handleDelete(expenseID){
    console.log("Delete Clicked")
    const expenses = this.state.expenses.filter(expense => expense.id !==expenseID);
    this.setState({expenses : expenses})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form expenses={this.state.expenses} addExpense={this.addExpense} handleChange={this.handleChange}/>
        <Table handleDelete={this.handleDelete} key={this.state.expenses.id} expenses={this.state.expenses}/>
      </div>
    );
  }
}

export default App;
