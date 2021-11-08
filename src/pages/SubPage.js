import React from "react";
import Header from "../components/header";
import SearchContainer from "../components/Search/SearchContainer";

const SubPage = (props) => {
    const category = props.category;
    return (
        <>
            <Header />
            <main>
                <SearchContainer category={category} key={category} />
            </main>
        </>
    );
}

export default SubPage;