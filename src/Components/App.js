// 하나의 componet만 rendering 가능
// 그렇기에 return 안에 여러 Componetn 설정
import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";


class App extends Component{
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
