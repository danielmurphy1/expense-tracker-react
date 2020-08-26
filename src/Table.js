import React from "react";

function Table (props) {

    const tableRows = [];

    for(let i = 0; i < props.expenses.length; i++){
        let expense = props.expenses[i];
        tableRows.push(<tr>
                            <td>{expense.date}</td>
                            <td>{expense.type}</td>
                            <td>{expense.location}</td>
                            <td>{expense.description}</td>
                            <td>{expense.amount}</td>
                            <td><button onClick={props.handleDelete}>Delete</button></td>
                        </tr>);
    }

    return (
        <table>
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Type</td>
                    <td>Location</td>
                    <td>Description</td>
                    <td>Amount</td>
                </tr>
            </thead>
            <tbody>{tableRows}</tbody>
               
        </table>
    )
}


export default Table;