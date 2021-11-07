import React from "react";

const SearchLoadMoreBtn = ({ onClick, isVisible }) => {
    return (
        <div>
            { isVisible && <button onClick={onClick}>More</button> }
        </div>
    );
};

export default SearchLoadMoreBtn;