import React from "react";

function Form() {
    return (
        <form id="form">
                <div class="pair-container">
                    <label for="transaction-date">Date</label>
                    <input type="date" id="transaction-date" name="transaction-date" required/>
                </div>
                <div class="pair-container">
                    <label for="transaction-type">Type</label>
                    <select id="transaction-type" required>
                        <option value="cc">Credit Card</option>
                        <option value="cash">Cash</option>
                        <option value="debit">Debit Card</option>
                        <option value="electronic">Venmo, ApplePay, etc</option>
                        <option value="check">Check</option>
                    </select>
                </div>
                <div class="pair-container">
                    <label for="location">Location</label>
                    <input type="text" id="location" required/>
                </div>
                <div class="pair-container">
                    <label for="description">Description of Expense</label>
                    <input type="text" id="description" required/>
                </div>
                <div class="pair-container">
                    <label for="amount">Amount</label>
                    <input type="number" id="amount" min="1" step="0.01" required/>
                </div>
                <button id="submit" type="submit">Add Expense</button>
            </form>
    )
}

export default Form;