import React from "react";
// react-router-dom 불러오기 (라이브러리 개념)
import {BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";

export default () => (
    // switch는 한 번에 하나의 route만 render하게 만들어줌
    // 이때 tv경우 exact를 넣지 않으면 popular rendr가 안됨.
    <Router>
        <>
        <Header />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/Search" component={Search} />
        <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
)