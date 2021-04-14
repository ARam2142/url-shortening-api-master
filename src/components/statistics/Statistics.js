import React from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron'
import Recognition from "../images/icon-brand-recognition.svg";
import Records from "../images/icon-detailed-records.svg"
import Customizable from "../images/icon-fully-customizable.svg"
import './statistics.css'

function Statistics() {


    return (
        <div className="hero">
            <div className="container">

                <br />
                <br />
                <br />
                <br />
                <div className="titleinfo">
                    <h2 className="advance">Advanced Statistics</h2>
                    <p className="sentence">Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>


                <div className="row row-cols-1 d-grid row-cols-md-3 g-2 three-cards">
                    <div className="p-2 col">
                        <div className="circle">
                            <img src={Recognition} alt="brand-recognition" />
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Brand Recognition</h5>
                                <p className="card-text">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                            </div>
                        </div>
                    </div>
                    {/* <svg>
                        <line id="line1" />
                    </svg> */}
                    <div className="p-2 col" style={{ marginTop: "30px" }}>
                        <div className="circle">
                            <img src={Records} alt="detailed-records" />
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Detailed Records</h5>
                                <p className="card-text">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                            </div>
                        </div>
                    </div>
                    {/* <svg>
                        <line id="line2" />
                    </svg> */}
                    <div className="p-2 col" style={{ marginTop: "60px" }}>
                        <div className="circle">
                            <img src={Customizable} alt="detailed-records" />
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Fully Customizable</h5>
                                <p className="card-text">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Statistics;
