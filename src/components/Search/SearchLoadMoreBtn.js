import React from "react";

const SearchLoadMoreBtn = ({ onClick, isVisible }) => {
    return (
        <div>
            { isVisible && <button onClick={onClick} className="btn-more">More</button> }
        </div>
    );
};

export default SearchLoadMoreBtn;