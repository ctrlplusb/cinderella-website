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
import { Container, Header, Heading, Main } from "./styled";

export default function App() {
  return (
    <Analytics>
      <Router>
        <Theme>
          <Container>
            <Header>
              <Heading>cinderella</Heading>
              <Menu />
            </Header>
            <Main>
              <Switch>
                <Route exact path="/" component={withTracker(Home)} />
                <Route exact path="/install" component={withTracker(Install)} />
                <Route path="/tutorial" component={withTracker(Tutorial)} />
                <Route exact path="/api" component={withTracker(API)} />
                <Route path="/demos" component={withTracker(Demos)} />
                <Route exact path="/credits" component={withTracker(Credits)} />
                <Route component={withTracker(NotFound)} />
              </Switch>
            </Main>
            <Footer />
          </Container>
        </Theme>
      </Router>
    </Analytics>
  );
}
