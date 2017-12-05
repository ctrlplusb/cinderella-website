import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { NarrowContent, Paragraph } from "../../styled";

const demosContext = require.context("./demos", false, /[\w-]+.js/);
const demoPaths = demosContext.keys();

export default class Demos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demos: null
    };
  }

  componentWillMount() {
    Promise.all(
      demoPaths.map((path, idx) => {
        const demoName = /\.\/(.*)\.js/.exec(path)[1];
        return import(`./demos/${demoName}.js`).then(x => ({
          name: demoName,
          demo: x.default
        }));
      })
    ).then(demos => this.setState({ demos }));
  }

  render() {
    const { demos } = this.state;
    if (!demos) {
      return null;
    }

    const { match: { path } } = this.props;

    const demoRouteComponentFactory = (name, { source, Demo }) => () => (
      <div>
        {/* <Demo /> */}
        {/* {Prose && <Prose />}
        {animation && (
          <ClickMeCode
            source={animation.source}
            onClick={() => {
              this.setState({
                executedAnimations: {
                  ...this.state.executedAnimations,
                  [currentPage]: true
                }
              });
              animation.instance.seek(0);
              animation.instance.play();
            }}
          />
        )}
        {animation && animation.notes && <Notes>{animation.notes}</Notes>} */}
      </div>
    );

    return (
      <NarrowContent>
        <Paragraph>Work in progress. Come back later.</Paragraph>
        {demos.map(({ name }) => (
          <Paragraph key={name}>
            <Link to={`${path}/${name}`}>{name}</Link>
          </Paragraph>
        ))}
        <Switch>
          {demos.map(({ name, demo }) => (
            <Route
              key={name}
              component={demoRouteComponentFactory(name, demo)}
            />
          ))}
        </Switch>
      </NarrowContent>
    );
  }
}
