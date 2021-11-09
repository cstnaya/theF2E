import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SubPage from "./pages/SubPage";
import DetailPage from "./pages/DetailPage";
import ErrorPage from "./pages/ErrorPage";
import Sitemap from "./pages/Sitemap";
import ScrollToTop from "./ScrollToTop";
import './css/global.css';

const Routes = () => {
    const pages = ['ScenicSpot', 'Restaurant', 'Hotel', 'Activity'];

    return (
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route path='/scenicSpot' exact>
                        <SubPage category="ScenicSpot" />
                    </Route>
                    <Route path='/restaurant' exact>
                        <SubPage category="Restaurant" />
                    </Route>
                    <Route path='/hotel' exact>
                        <SubPage category="Hotel" />
                    </Route>
                    <Route path='/activity' exact>
                        <SubPage category="Activity" />
                    </Route>
                    <Route path='/sitemap' exact>
                        <Sitemap />
                    </Route>
                    <Route path='/' exact component={MainPage} />
                    <Route path="/:type(scenicSpot|restaurant|hotel|activity)/:id" exact component={DetailPage} />
                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default Routes;
