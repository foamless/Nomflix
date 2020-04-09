import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
    // switch는 한 번에 하나의 route만 render하게 만들어줌
    // 이때 tv경우 exact를 넣지 않으면 popular rendr가 안됨.
    <Router>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/tv/popular" render={() => <h1>Popular</h1>} />
        <Route path="/Search" component={Search} />
        <Redirect from="*" to="/" />
        </Switch>
    </Router>
)