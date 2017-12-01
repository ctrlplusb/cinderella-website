import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Credits from "../../views/Credits";
import Home from "../../views/Home";
import Install from "../../views/Install";
import Sample from "../../views/Sample";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
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
              <Route exact path="/install" component={Install} />
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
