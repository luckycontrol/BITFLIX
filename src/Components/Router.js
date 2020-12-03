import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import Tv from "../Routes/TV";
import Detail from "../Routes/Detail";

// 오로지 라우터만 관리하는 컴포넌트

export default () => (
  <Router>
    <Header />

    {/* Switch가 있어야 하나의 라우터만 타게 된다. */}
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={Tv} />
      <Route path="/search" exact component={Search} />
      <Route path="/movie/:id" exact component={Detail} />
      <Route path="/show/:id" exact component={Detail} />
    </Switch>
  </Router>
);
