import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import { Route, Switch } from "react-router-dom";
import cinderella from "cinderella";
import throttle from "throttleit";
import ClickMeCode from "../../components/ClickMeCode";
import { H2, NarrowContent, Paragraph } from "../../styled";
import { DemoContainer, DemoColumn, DemoPager, DemoView } from "./styled";

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
    this.flipOutAnimation = cinderella().add({
      targets: this.demo,
      transform: {
        rotateY: {
          from: 0,
          to: "-180deg"
        },
        opacity: {
          from: 1,
          to: 0
        }
      },
      defaults: {
        duration: 250,
        easing: "easeOutCubic"
      }
    });

    this.flipInAnimation = cinderella().add({
      targets: this.demo,
      transform: {
        rotateY: {
          from: "-180deg",
          to: "0deg"
        },
        opacity: {
          from: 0,
          to: 1
        }
      },
      defaults: {
        duration: 250,
        easing: "easeOutCubic"
      }
    });
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

  demoRef = el => {
    if (!el) return;
    this.demo = findDOMNode(el);
  };

  onRouteChange = e => {
    e.preventDefault();

    const { history: { push } } = this.props;
    const href = e.target.getAttribute("data-href");

    this.flipOutAnimation.play().then(() => {
      push(href);
      this.flipInAnimation.play();
    });
  };

  render() {
    const { demos } = this.state;
    if (!demos) {
      return null;
    }

    const { match: { path, isExact } } = this.props;

    const demoRouteComponentFactory = (
      name,
      { description, animationFactory, source, View }
    ) => {
      const currentDemoIndex = demos.findIndex(x => x.name === name);

      const prev =
        currentDemoIndex === 0
          ? demos[demos.length - 1]
          : demos[currentDemoIndex - 1];
      const next =
        currentDemoIndex + 1 === demos.length
          ? demos[0]
          : demos[currentDemoIndex + 1];

      return class DemoRoute extends Component {
        constructor(props) {
          super(props);
          this.state = {
            windowResizeCount: 0
          };
        }

        componentDidMount() {
          window.addEventListener("resize", this.onWindowResize);
        }

        componentWillUnmount() {
          window.removeEventListener("resize", this.onWindowResize);
        }

        onWindowResize = throttle(() => {
          this.setState({
            windowResizeCount: this.state.windowResizeCount + 1
          });
        }, 16);

        render() {
          const { windowResizeCount } = this.state;
          const animation = animationFactory();
          return (
            <DemoContainer key={windowResizeCount}>
              <DemoPager>
                <H2>{name}</H2>
                <H2>
                  <a href={path} data-href={path} onClick={this.onRouteChange}>
                    back
                  </a>
                </H2>
              </DemoPager>
              {description && <Paragraph>{description}</Paragraph>}
              <DemoView>
                <DemoColumn>
                  <ClickMeCode
                    source={source}
                    onClick={() => {
                      animation.play();
                    }}
                  />
                </DemoColumn>
                <DemoColumn>
                  <View />
                </DemoColumn>
              </DemoView>
              <DemoPager>
                <a
                  href={`${path}/${prev.name}`}
                  data-href={`${path}/${prev.name}`}
                  onClick={this.onRouteChange}
                >
                  &lt;&lt; {prev.name}
                </a>
                <a
                  href={`${path}/${next.name}`}
                  data-href={`${path}/${next.name}`}
                  onClick={this.onRouteChange}
                >
                  {next.name} &gt;&gt;
                </a>
              </DemoPager>
            </DemoContainer>
          );
        }
      };
    };

    return (
      <NarrowContent innerRef={this.demoRef}>
        {isExact && (
          <div>
            {demos.map(({ name }) => (
              <Paragraph key={name}>
                <a
                  href={`${path}/${name}`}
                  data-href={`${path}/${name}`}
                  onClick={this.onRouteChange}
                >
                  {name}
                </a>
              </Paragraph>
            ))}
          </div>
        )}
        <Switch>
          {demos.map(({ name, demo }) => (
            <Route
              key={name}
              path={`${path}/${name}`}
              component={demoRouteComponentFactory(name, demo)}
            />
          ))}
        </Switch>
      </NarrowContent>
    );
  }
}
