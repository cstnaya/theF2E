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
                <div>
                    <label htmlFor='keyword' className="sr-only">關鍵字搜尋：</label>
                    <input type="search" id="keyword" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="請輸入關鍵字" />
                </div>
                <div>
                    <label  htmlFor='city' className="sr-only">請選擇縣市：</label>
                    <select id="city" value={city} onChange={(e) => setCity(e.target.value)} >
                        <option value="">所有縣市</option>
                            { Object.entries(cities).map(([city, val]) => {
                                return (<option value={`/${val}`} key={val}>{city}</option>);
                            })}
                    </select>
                </div>                
                <button type="submit" title="搜尋">搜尋</button>
            </form>
        </div>
    );
};

export default SearchBar;