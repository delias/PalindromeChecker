import React, { useState, useEffect } from "react";

// Define a PalindromeList component
function PalindromeList({ palindromes }) {

    useEffect(() => {
        console.log("The palindromes list has changed.");
    }, [palindromes]); 

    // Return the JSX code to render the component
    return (
        <div className="row">
            <div className="col">
                <h2>Palindrome List</h2>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Text</th>
                            <th>Date Registered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Use map to iterate over the palindromes array and render a table row for each palindrome */}
                        {palindromes.map((palindrome) => (
                            <tr key={palindrome.id}>
                                <td>{palindrome.id}</td>
                                <td>{palindrome.text}</td>
                                <td>{palindrome.dateRegistered}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// Export the PalindromeList component
export default PalindromeList;