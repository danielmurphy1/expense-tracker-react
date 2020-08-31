import React from "react";

function Table (props) {

    const tableRows = [];

        //set i = 1 so that the initial empty string state is not added to the array/table
    for(let i = 1; i < props.expenses.length; i++){
        let expense = props.expenses[i];
        tableRows.push(<tr key={expense.id}>
                            <td>{expense.date}</td>
                            <td>{expense.type}</td>
                            <td>{expense.location}</td>
                            <td>{expense.description}</td>
                            <td>${expense.amount}</td>
                            <td><button className="btn btn-danger" onClick={(e) => props.handleDelete(expense.id)}>Delete</button></td>
                        </tr>);
    }

    return (
        <table className="table table-striped table-dark">
            <thead className="thead-dark">
                <tr>
                    <td>Date</td>
                    <td>Type</td>
                    <td>Location</td>
                    <td>Description</td>
                    <td>Amount</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </table>
    )
}


export default Table;