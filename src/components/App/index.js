import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Theme from "../Theme";
import Home from "../Home";
import Sample from "../Sample";
import * as Styled from "./styled";

export default function App() {
  return (
    <Router>
      <Theme>
        <Styled.Container>
          <Styled.Header>
            <Styled.Heading>cinderella</Styled.Heading>
          </Styled.Header>
          <Styled.Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/demo/:id" component={Sample} />
            </Switch>
          </Styled.Main>
        </Styled.Container>
      </Theme>
    </Router>
  );
}
