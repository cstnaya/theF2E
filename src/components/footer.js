import React from "react";
import { Link } from "react-router-dom";
import '../css/footer.css';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <Link to="/sitemap">導覽地圖</Link>
                </li>
                <li>
                    Copyright © 2021
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
