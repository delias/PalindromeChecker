import React, { useState } from 'react';
import axios from "axios";

const PalindromeForm = () => {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState("");
    //const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Use axios to make a POST request to the web api endpoint with the input as a parameter
        axios
            .post(`https://localhost:7236/api/palindrome?text=${input}`)
            .then((response) => {
                // If the request is successful, set the message state variable with the response data
                setMessage(`The palindrome ${response.data.text} was added successfully.`);
                console.log(response.data);
            })
            .catch((error) => {
                // If the request fails, set the message state variable with the error message
                //setMessage(JSON.stringify(error.response.data.errors.text[0]));
                setMessage(error.response.data);
                console.log(error.response.data);
            });
    };

    return (
        <div className="container">
            <h1>Palindrome Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="input">Enter a palindrome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default PalindromeForm;