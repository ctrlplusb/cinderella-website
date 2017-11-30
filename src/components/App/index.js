import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Theme from "../Theme";
import Menu from "../Menu";
import Home from "../Home";
import Footer from "../Footer";
import Sample from "../Sample";
import * as Styled from "./styled";

export default function App() {
  return (
    <Router>
      <Theme>
        <Styled.Container>
          <Styled.Header>
            <Styled.Heading>cinderella</Styled.Heading>
            <Menu />
          </Styled.Header>
          <Styled.Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/demo/:id" component={Sample} />
            </Switch>
          </Styled.Main>
          <Footer />
        </Styled.Container>
      </Theme>
    </Router>
  );
}
