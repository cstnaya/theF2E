import React from "react";
import Header from "../components/header";
import Col3Container from "../components/Col3Container";

const MainPage = () => {

    return (
        <>
            <Header />
            <main>
                <Col3Container title="熱門景點" url="ScenicSpot" />
                <Col3Container title="熱門美食" url="Restaurant" />
                <Col3Container title="熱門活動" url="Activity" />
            </main>
        </>
    );
};

export default MainPage;