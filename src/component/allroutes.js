import React from "react";
import { Route, Switch } from "react-router-dom";
import Spot from './pages/spot';
import Restaurant from './pages/restaurant';
import Hotel from './pages/hotel';
import Events from './pages/events';
import Sitemap from './pages/sitemap';
import Search from './pages/search';
import Home from './pages/home';

const AllRoutes = () => {
    return (
        <Switch>
            <Route path="/spot" exact>
                <Spot />
            </Route>
            <Route path="/restaurant" exact>
                <Restaurant />
            </Route>
            <Route path="/hotel" exact>
                <Hotel />
            </Route>
            <Route path="/events" exact>
                <Events />
            </Route>
            <Route path="/sitemap" exact>
                <Sitemap />
            </Route>
            <Route path="/search" exact>
                <Search />
            </Route>
            <Route path="/" exact>
                <Home />
            </Route>            
        </Switch>
    );
}

export default AllRoutes;