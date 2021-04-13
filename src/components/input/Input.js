import React from "react";
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import "./inputApi.css"

const inputSearch = () => {
    return (
        <div className="container">
            <div className="formbackground">
                    <form>
                        <input placeholder="Shorten a link here..." type="text"></input>
                        <button class="btn btn-primary shorten-it" type="submit"><span>Shorten It!</span></button>
                    </form>

                </div>
        </div>
    )
}

export default inputSearch;