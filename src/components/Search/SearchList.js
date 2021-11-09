import React from "react";
import { useRouteMatch } from "react-router-dom";
import Card from "../card";
import noresult from '../../img/whale.png';

const SearchList = ({ result }) => {
    const { url } = useRouteMatch();

    const renderedList = result.map(row => {
        const type = url.slice(1);
        return (
            <li key={row.ID} className='col'>
                <Card data={row} key={row.ID} type={type} className="" />
            </li>
        );
    })
    
    if (result.length > 0) {
        return (
            <ol className="row search-result">
                {renderedList}
            </ol>
        );
    } else {
        return (
            <div className="noresult">
                <img src={noresult} alt="沒有搜尋結果" title="沒有搜尋結果" width="450" />
                <h3>沒有搜尋結果</h3>
            </div>
        );
    }
};

export default SearchList;