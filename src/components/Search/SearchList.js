import React from "react";
import { useRouteMatch } from "react-router-dom";
import Card from "../card";

const SearchList = ({ result }) => {
    const { url } = useRouteMatch();

    const renderedList = result.map(row => {
        const type = url.slice(1);
        return (
            <li key={row.ID}>
                <Card data={row} key={row.ID} type={type} className="search-item" />
            </li>
        );
    })
    
    return (
        <ol className="search-result">
            {renderedList}
        </ol>
    );
};

export default SearchList;