import React from "react";
import img from '../img/whale.png';
import Header from '../components/header';
import Footer from "../components/footer";

const ErrorPage = () => {
    return (
        <>
            <Header />
            <div className="err404">
                <img src={img} alt="此頁面不存在" title="此頁面不存在" width="500" />
                <div>此頁面不存在</div>
            </div>
            <Footer />
        </>        
    );
}

export default ErrorPage;