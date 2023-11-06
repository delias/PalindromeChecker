import React, { useState, useEffect } from "react";
import PalindromeForm from './PalindromeForm';
import PalindromeList from './PalindromeList';
import './App.css'
import axios from "axios";
function App() {
    // Define a state variable to store the list of palindromes
    const [palindromes, setPalindromes] = useState([]);

    // Define a callback function to add a new palindrome to the list
    function addPalindrome(newPalindrome) {
        // Use the spread operator to create a new array with the new palindrome
        setPalindromes([...palindromes, newPalindrome]);
    }

    useEffect(() => {
        // Define an async function to get the data
        async function getData() {
            try {
                // Use axios to make a GET request to the web api endpoint
                const response = await axios.get("https://localhost:7236/api/palindrome");
                // Set the palindromes state variable with the data from the response
                setPalindromes(response.data);
            } catch (error) {
                // Handle any errors
                console.error(error);
            }
        }
        // Invoke the async function
        getData();
    }, []);

    return (
        <div className="App">
            <div className="container">
                <h1>Palindrome Checker</h1>
            </div>
            <PalindromeForm addPalindrome={addPalindrome} />
            <PalindromeList palindromes={palindromes} />
        </div>
    )
}

export default App
