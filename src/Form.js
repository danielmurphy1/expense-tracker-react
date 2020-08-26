import React from "react";

function Form(props) {
    return (
        <form className="d-flex justify-content-around flex-wrap">
                <div className="form-group">
                    <label>Date 
                        <input className="form-control" type="date" name="date" value={props.expenses.date} onChange={props.handleChange} required/>
                    </label>
                </div>
                <div className="form-group">
                    <label>Type 
                        <select className="form-control" name="type" value={props.expenses.type} onChange={props.handleChange} required>
                            <option value="">--SelectType--</option>
                            <option value="cc">Credit Card</option>
                            <option value="cash">Cash</option>
                            <option value="debit">Debit Card</option>
                            <option value="electronic">Venmo, ApplePay, etc</option>
                            <option value="check">Check</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label>Location 
                        <input className="form-control" type="text" name="location" value={props.expenses.location} onChange={props.handleChange} required/>
                    </label>
                </div>
                <div className="form-group">
                    <label>Description of Expense 
                        <input className="form-control" type="text" name="description" value={props.expenses.description} onChange={props.handleChange} required/>
                    </label>
                </div>
                <div className="form-group">
                    <label>Amount 
                        <input className="form-control" type="number" name="amount" value={props.expenses.amount} onChange={props.handleChange}  min="1" step="0.01" required/>
                    </label>
                </div>
                <button className="btn btn-secondary btn-sm"type="submit" onClick={props.addExpense} >Add Expense</button>
            </form>
    )
}

export default Form;