import React from "react";

function Table (props) {
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
            <tbody id="body"></tbody>
                <tr>
                    <td>{props.date}</td>
                    <td>{props.type}</td>
                    <td>{props.location}</td>
                    <td>{props.description}</td>
                    <td>{props.amount}</td>
                </tr>
        </table>
    )
}


export default Table;