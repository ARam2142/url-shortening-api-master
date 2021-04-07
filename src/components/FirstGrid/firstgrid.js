import React from 'react';
import Header from "../header/header.js";
import Button from 'react-bootstrap/Button'
// import Image from 'react-bootstrap/Image';
// import DeskWorkPic from './images/illustration-working.svg';
// import DeskWorkPic from './logo.js';

const FirstGrid = () => {
    return (
        <div className="item-1">
            <Header />
            <br />
            <br />
            <br />
            <h1>More than just shorter links</h1>
            <div className="row">
                <div className="col">
                    <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                    <Button variant="info">Get Started</Button>{' '}
                </div>
                <div class="col-4">
                    <div>
                        {/* <DeskWorkPic /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstGrid;