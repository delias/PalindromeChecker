import React, { useState } from 'react';
import axios from "axios";

function PalindromeForm({ addPalindrome }) {
     // Define a state variable to store the user input
    const [input, setInput] = useState("");
     // Define a state variable to store the response message
    const [message, setMessage] = useState("");

    const handleChange = async (e) => {
        setInput(e.target.value);
        setMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Use axios to make a POST request to the web api endpoint with the input as a parameter
        axios
            .post(`https://localhost:7236/api/palindrome?text=${input}`)
            .then((response) => {
                // If the request is successful, set the message state variable with the response data
                setMessage(`The palindrome "${response.data.text}" was added successfully.`);
                console.log(response.data);
                addPalindrome(response.data);
            })
            .catch((error) => {
                // If the request fails, set the message state variable with the error message
                //setMessage(JSON.stringify(error.response.data.errors.text[0]));
                setMessage(error.response.data);
                console.log(error.response.data);
            });
    };

    return (
        <div className="row">
            <div className="col-md-6">
                <h2>Palindrome Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="input">Enter a palindrome</label>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                id="input"
                                value={input}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default PalindromeForm;