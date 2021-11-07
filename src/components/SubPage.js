import React from "react";
import {  } from "react-router";
import SearchContainer from "./Search/SearchContainer";

const SubPage = (props) => {
    const category = props.category;
    return (
        <div>
            <SearchContainer category={category} key={category} />
        </div>
    );
}

export default SubPage;