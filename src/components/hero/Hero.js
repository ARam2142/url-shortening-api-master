import React from "react";
import illustrationWorking from "../images/illustration-working.svg"

const Hero = () => {
    return (

        <section className={'hero'}>
            <div className={'container'}>
                <h1>More than just shorter links</h1>
                <div className="row">
                    <div className="col">
                        <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                        <button variant="info">Get Started</button>{' '}
                    </div>
                    <div className="col">
                        <img
                            loading={'lazy'}
                            src={illustrationWorking}
                            alt={'Illustration Working'}
                        />
                    </div>
                </div>

            </div>
        </section>


    )

}
export default Hero;