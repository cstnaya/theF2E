import React from "react";
import '../css/totop.css';

const ToTop = () => {
    const handleToTop = (e) => {
        e.preventDefault();
        window.scrollTo(0,0);
    };

    return (
        <a href="#totop" title="回到最上面" className="totop" onClick={(e) => handleToTop(e)}>
            <span className="arrow"></span>
            <span>UP</span>
        </a>
    );
};

export default ToTop;