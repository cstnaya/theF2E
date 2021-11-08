import React, { useState } from "react";
import { cities } from "../support";

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(term, city);
    };

    return (
        <div className='form-searchbar'>
            <form onSubmit={handleSubmit}>
                <input type="search" value={term} onChange={(e) => setTerm(e.target.value)} />

                <select value={city} onChange={(e) => setCity(e.target.value)} >
                    <option value="">全部</option>
                        { Object.entries(cities).map(([city, val]) => {
                            return (<option value={`/${val}`} key={val}>{city}</option>);
                        })}
                </select>
                
                <button type="submit">搜尋</button>
            </form>
        </div>
    );
};

export default SearchBar;