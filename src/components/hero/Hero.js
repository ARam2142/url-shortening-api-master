import React from "react";
import './Hero.css'
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import illustrationWorking from "../images/illustration-working.svg"

const Hero = () => {

    return (

        <section className={'hero top'}>
            <div className={'container'}>
                <div className="row">
                    <div className="col-4">
                        <h1>More than just shorter links</h1>
                        <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                        <button className="btn btn-primary get-started" type="submit"><span>Get Started</span></button>
                    </div>
                    <div className="col illustation">
                        {/* <img
                            id={'working'}
                            loading={'lazy'}
                            src={illustrationWorking}
                            alt={'Illustration Working'}
                        /> */}
                    </div>
                </div>
            </div>
        </section>


    )

}
export default Hero;