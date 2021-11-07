import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SubPage from "./components/SubPage";
import DetailPage from "./components/DetailPage";
import ErrorPage from "./components/ErrorPage";

const Routes = () => {
    const pages = ['ScenicSpot', 'Restaurant', 'Hotel', 'Activity'];

    return (
        <Router>
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
                <Route path='/activity/:id' exact component={DetailPage} />
                <Route path="*">
                    <ErrorPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;
