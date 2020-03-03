import React from 'react';
import '../css/Intro/Intro.css';

const Intro = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <div className="section-intro">
                        <div className="section-intro-title">
                            Places list
                            </div>
                        <div className="section-intro-text">
                            You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using a plugin.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;