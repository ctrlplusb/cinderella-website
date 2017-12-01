import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Credits from "../Credits";
import Footer from "../Footer";
import Home from "../Home";
import Menu from "../Menu";
import Sample from "../Sample";
import Theme from "../Theme";
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
              <Route exact path="/demo/:id" component={Sample} />
              <Route exact path="/credits" component={Credits} />
            </Switch>
          </Styled.Main>
          <Footer />
        </Styled.Container>
      </Theme>
    </Router>
  );
}
