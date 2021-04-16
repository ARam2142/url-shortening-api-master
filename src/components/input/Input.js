import React, { useState, useEffect } from "react";
// import axios from 'axios'
import validator from 'validator'
import "./inputApi.css"

const Form = () => {
    // const url = `https://api.shrtco.de/v2/shorten?url=${url}`
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (value, e) => {
        e.preventDefault();
        console.log(`The user typed in: ${input}`);
        
        
        if (validator.isURL(value)) {
            var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
            var regexp = new RegExp(expression);
            console.log(regexp)
            return regexp.test(value)
        }
    }

    return (
        <div className="formbackground">
            <form onSubmit={(e) => handleSubmit(e.target.value)}>
                <input
                    placeholder="Shorten a link here..."
                    type="text"
                    value={input}
                    onChange={handleChange}
                />
                <button className="btn btn-primary shorten-it" type="submit"><span>Shorten It!</span></button>
                {/* <p style={{
                    fontWeight: "bold",
                    color: "red"
                }}>{ }</p> */}
            </form>
        </div>
    )
}

export default Form;

// Shorten any valid URL
// See a list of their shortened links, even after refreshing the browser
// Copy the shortened link to their clipboard in a single click
// Receive an error message when the form is submitted if:
// The input field is empty