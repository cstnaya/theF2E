import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const Sitemap = () => {
    return (
        <>
            <Header />
            <Breadcrumbs now={`網站導覽`} />
            <main id='C' className="sitemap">
                <p>
                    本網站依無障礙網頁設計原則建置，網站的主要內容分為三大區塊：
                </p>
                <ol>
                    <li>上方功能區塊</li>
                    <li>中央內容區塊</li>
                    <li>下方功能區塊</li>
                </ol>
                <p>本網站的快速鍵﹝Accesskey﹞設定如下：</p>
                <ol>
                    <li>Alt + U：上方功能區塊</li>
                    <li>Alt + C：中央內容區塊，為本頁主要內容區</li>
                    <li>Alt + Z：下方功能區塊</li>
                </ol>
                <ol>
                    <li><Link to="/" title="首頁">首頁</Link></li>
                    <li><Link to="/scenicSpot" title="景點">景點</Link></li>
                    <li><Link to="/restaurant" title="美食">美食</Link></li>
                    <li><Link to="/hotel" title="旅宿">旅宿</Link></li>
                    <li><Link to="/activity" title="活動">活動</Link></li>
                </ol>
            </main>
            <Footer />
        </>
    );
};

export default Sitemap;