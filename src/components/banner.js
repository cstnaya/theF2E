import React from "react";
import '../css/banner.css';

const Banner = ({ title, subtitle, background }) => {
    return (
        <section className="banner" style={{ backgroundImage : `url(${background})` }}>
            <div className="green">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </div>
        </section>
    );
};

export default Banner;