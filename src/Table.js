import React from "react";

function Table () {
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
        </table>
    )
}


export default Table;