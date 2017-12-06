import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import cinderella from "cinderella";
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
    )
      .then(demos => {
        this.onlyIfMounted(() => this.setState({ demos }));
      })
      .then(() => {
        this.onlyIfMounted(() => this.initialize());
      });
  }

  initialize() {
    this.hideMenuAnimation = cinderella().add({
      targets: this.menu,
      transform: {
        rotateY: {
          from: 0,
          to: "180deg",
          duration: 1000
        },
        opacity: {
          from: 1,
          to: 0,
          delay: 500,
          duration: 1
        }
      }
    });
    this.checkMenuState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkMenuState(nextProps);
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  onlyIfMounted = thunk => {
    if (this.unmounted) {
      return;
    }
    thunk();
  };

  checkMenuState = props => {
    const { match: { isExact } } = props;
    if (!isExact) {
      // TODO: Slide out menu
      console.log("hiding");
      this.hideMenuAnimation.play();
    }
  };

  menuRef = domNode => {
    this.menu = domNode;
  };

  demoRef = domNode => {
    this.demo = domNode;
  };

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
        <div ref={this.menuRef}>
          {demos.map(({ name }) => (
            <Paragraph key={name}>
              <Link to={`${path}/${name}`}>{name}</Link>
            </Paragraph>
          ))}
        </div>
        <div ref={this.demoRef}>
          <Switch>
            {demos.map(({ name, demo }) => (
              <Route
                key={name}
                component={demoRouteComponentFactory(name, demo)}
              />
            ))}
          </Switch>
        </div>
      </NarrowContent>
    );
  }
}
