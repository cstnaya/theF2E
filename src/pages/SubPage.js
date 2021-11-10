import React from "react";
import Header from "../components/header";
import SearchContainer from "../components/Search/SearchContainer";
import Banner from "../components/banner";
import Footer from "../components/footer";
import { AppCategory } from "../components/support";
import banner2 from '../img/banner2.jpg';
import Breadcrumbs from "../components/Breadcrumbs";

const SubPage = (props) => {
    const category = props.category;
    return (
        <>
            <Header />
            <Banner title={`${AppCategory[category]}搜尋`} subtitle={category} background={banner2} />
            <Breadcrumbs now={`${AppCategory[category]}搜尋`} />
            <main id='C'>
                <SearchContainer category={category} key={category} />
            </main>
            <Footer />
        </>
    );
}

export default SubPage;