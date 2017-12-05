import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Credits from "../../views/Credits";
import Home from "../../views/Home";
import Install from "../../views/Install";
import API from "../../views/API";
import Demos from "../../views/Demos";
import Demo from "../../views/Demo";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Story from "../../views/Story";
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
              <Route path="/story" component={Story} />
              <Route exact path="/api" component={API} />
              <Route exact path="/demos" component={Demos} />
              <Route exact path="/demos/:id" component={Demo} />
              <Route exact path="/credits" component={Credits} />
            </Switch>
          </Styled.Main>
          <Footer />
        </Styled.Container>
      </Theme>
    </Router>
  );
}
