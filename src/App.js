import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Form from "./Components/Form";
import Table from "./Components/Table";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      expenses: []
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
      expenses: this.state.expenses.length >= 1 ? [...this.state.expenses, newExpense] : [newExpense],
      date: "",
      type: "", 
      location: "", 
      description: "", 
      amount: ""
    })
  }

  handleChange(event){
    const {name, value} = event.target;
    this.setState({
      [name] : value
    })
  }

  handleDelete(expenseID){
    const expenses = this.state.expenses.filter(expense => expense.id !==expenseID);
    this.setState({expenses : expenses})
  }

  componentDidMount(){
    localStorage.getItem("expenses") && this.setState({
      expenses: JSON.parse(localStorage.getItem("expenses"))
    })
  }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem("expenses", JSON.stringify(nextState.expenses));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form state={this.state} addExpense={this.addExpense} handleChange={this.handleChange}/>
        <Table handleDelete={this.handleDelete} key={this.state.expenses.id} expenses={this.state.expenses}/>
      </div>
    );
  }
}

export default App;