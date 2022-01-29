import React from 'react';
import myPhoto from "../../assets/about/about-me.jpg";

function About() {

    const aboutText =
        "I love the process of solving problems. I'm new to computer programming, but I am enjoying learning the craft.";

    return (
        <section className="content-section about-section">
            <div className="about-text-wrapper">
                <p className="about-text">
                    {aboutText}
                </p>
            </div>
            <div className="my-photo-wrapper">
                <img className="my-photo" src={myPhoto} alt="my photo"/>
            </div>
        </section>
    )
}

export default About;