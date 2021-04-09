import React from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron'
import './statistics.css'

function Statistics() {
    return (
        <div className="statistics">
            <div className="container">

                <br />
                <br />
                <br />
                <br />
                <h2 className="advance">Advanced Statistics</h2>
                <p className="sentence">Track how your links are performing across the web with our advanced statistics dashboard.</p>


                <div class="row row-cols-1 d-grid row-cols-md-3 g-2 three-cards">
                    <div class="p-2 col">
                        <div class="card" style={{ width: "23rem" }}>
                            <div class="card-body">
                                <h5 class="card-title">Brand Recognition</h5>
                                <p class="card-text">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 col">
                        <div class="card" style={{ width: "23rem" }}>
                            <div class="card-body">
                                <h5 class="card-title">Detailed Records</h5>
                                <p class="card-text">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 col">
                        <div class="card" style={{ width: "23rem" }}>
                            <div class="card-body">
                                <h5 class="card-title">Fully Customizable</h5>
                                <p class="card-text">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Statistics;
