import React from "react";
import { NavLink } from "react-router-dom";
import { AppTitle } from "./support";
import '../css/header.css';

const Header = () => {
    return (
        <header>
            <a href="#C" accessKey="C" title="跳到中央主要區域" className='sr-only sr-only-focusable'>跳到中央主要區域</a>
            <h1>
                <NavLink to="/" title={`回${AppTitle}首頁`}>
                    <span>{AppTitle}</span>
                </NavLink>
            </h1>
            <ul>
                <a href="#U" id="U" accessKey="U" title="上方區域">:::</a>
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