import React from "react";
import { Link } from "react-router-dom";
import '../css/breadcrumbs.css';

const Breadcrumbs = ({ now, path=null }) => {
    return (
        <div>
            <ul className="breadcrumbs">
                <a href="#C" accessKey='C' title="中央主要區域">:::</a>
                <li><Link to="/" title="回首頁">首頁</Link></li>
                { path && <li><Link to={`/${path.url}`}>{path.name}</Link></li> }
                <li>{now}</li>
            </ul>
        </div>
    );
};

export default Breadcrumbs;