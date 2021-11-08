import React from "react";
import { NavLink } from "react-router-dom";
import { AppTitle } from "./support";
import '../css/header.css';

const Header = () => {
    return (
        <header>
            <h1>
                <NavLink to="/">{AppTitle}</NavLink>
            </h1>
            <ul>
                <li>
                    <NavLink to="/scenicSpot">景點</NavLink>
                </li>
                <li>
                    <NavLink to="/restaurant">美食</NavLink>
                </li>
                <li>
                    <NavLink to="/hotel">旅宿</NavLink>
                </li>
                <li>
                    <NavLink to="/activity">活動</NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;