import React from "react";

const SearchLoadMoreBtn = ({ onClick, isVisible }) => {
    return (
        <div className="search-more">
            { isVisible && <button onClick={onClick} className="btn-more" title="瀏覽更多搜尋結果">More</button> }
        </div>
    );
};

export default SearchLoadMoreBtn;