import React from "react";

function Form(props) {
    return (
        <form id="form">
                <div>
                    <label>Date
                        <input type="date" name="date" value={props.expenses.date} onChange={props.handleChange} required/>
                    </label>
                </div>
                <div>
                    <label>Type
                        <select name="type" value={props.expenses.type} onChange={props.handleChange} required>
                            <option value="">--SelectType--</option>
                            <option value="cc">Credit Card</option>
                            <option value="cash">Cash</option>
                            <option value="debit">Debit Card</option>
                            <option value="electronic">Venmo, ApplePay, etc</option>
                            <option value="check">Check</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>Location
                        <input type="text" name="location" value={props.expenses.location} onChange={props.handleChange} required/>
                    </label>
                </div>
                <div>
                    <label>Description of Expense
                        <input type="text" name="description" value={props.expenses.description} onChange={props.handleChange} required/>
                    </label>
                </div>
                <div>
                    <label>Amount
                        <input type="number" name="amount" value={props.expenses.amount} onChange={props.handleChange}  min="1" step="0.01" required/>
                    </label>
                </div>
                <button id="submit" type="button" onClick={props.addExpense}>Add Expense</button>
            </form>
    )
}

export default Form;