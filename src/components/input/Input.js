// Shorten any valid URL
// See a list of their shortened links, even after refreshing the browser
// Copy the shortened link to their clipboard in a single click
// Receive an error message when the form is submitted if:
// The input field is empty

import React, {useState, useEffect} from "react";
// import axios from 'axios'
import "./inputApi.css"

const CopyApi = () => {
    const api = "https://api.shrtco.de/v2/shorten";
    const [urls, setUrl] = useState([]);

    useEffect(() => {

    })

    function handleSubmit(e) {
        e.preventDefault();
        console.log(urls);
    }



    return (
        <div className="formbackground">
            <form onSubmit={handleSubmit}>
                <input placeholder="Shorten a link here..." value={urls} type="text" onChange={(e) =>setUrl(e.target.value) }/>
                <button className="btn btn-primary shorten-it" type="submit"><span>Shorten It!</span></button>
            </form>
            {/* <ul>
                {urls.map(url => ( 
                    <li key={url.id}>
                        {}
                    </li>
                ))}
            </ul> */}

        </div>
    )
}

export default CopyApi;