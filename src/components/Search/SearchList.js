import React from "react";
import { Link, useRouteMatch } from "react-router-dom"; 

const SearchList = ({ result }) => {
    const { url } = useRouteMatch();

    const renderedList = result.map(row => {
        return (
            <div key={row.ID}>
                <Link to={`${url}/${row.ID}`}>{row.Name}</Link>
            </div>
        );
    })
    
    return (
        <div>
            {renderedList}
        </div>
    );
};

export default SearchList;