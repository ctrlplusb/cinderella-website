import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withTracker from "../../hocs/withTracker";
import Credits from "../../views/Credits";
import Home from "../../views/Home";
import Install from "../../views/Install";
import API from "../../views/API";
import Demos from "../../views/Demos";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Tutorial from "../../views/Tutorial";
import NotFound from "../../views/NotFound";
import Analytics from "../Analytics";
import Theme from "../Theme";
import * as Styled from "./styled";

export default function App() {
  return (
    <Analytics>
      <Router>
        <Theme>
          <Styled.Container>
            <Styled.Header>
              <Styled.Heading>cinderella</Styled.Heading>
              <Menu />
            </Styled.Header>
            <Styled.Main>
              <Switch>
                <Route exact path="/" component={withTracker(Home)} />
                <Route exact path="/install" component={withTracker(Install)} />
                <Route path="/tutorial" component={withTracker(Tutorial)} />
                <Route exact path="/api" component={withTracker(API)} />
                <Route path="/demos" component={withTracker(Demos)} />
                <Route exact path="/credits" component={withTracker(Credits)} />
                <Route component={withTracker(NotFound)} />
              </Switch>
            </Styled.Main>
            <Footer />
          </Styled.Container>
        </Theme>
      </Router>
    </Analytics>
  );
}
