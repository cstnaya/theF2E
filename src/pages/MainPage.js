import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import Col3Container from "../components/Col3Container";
import ToTop from "../components/toTop";
import Footer from "../components/footer";
import { AppTitle, SubTitle } from "../components/support";
import banner1 from '../img/banner1.jpg';
import '../css/card.css';

const MainPage = () => {
    return (
        <>
            <Header />
            <Banner title={AppTitle} subtitle={SubTitle} background={banner1} />
            <main>
                <Col3Container title="景點 ScenicSpot" url="ScenicSpot" />
                <Col3Container title="美食 Restaurant" url="Restaurant" />
                <Col3Container title="活動 Activity" url="Activity" />
            </main>
            <ToTop />
            <Footer />
        </>
    );
};

export default MainPage;