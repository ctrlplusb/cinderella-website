import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import cinderella from "cinderella";
import Triangle from "../../components/Triangle";
import ClickMeCode from "../../components/ClickMeCode";
import { Anchor, H2, NarrowContent, Notes } from "../../styled";
import { Pager, Stage } from "./styled";

const pagesContext = require.context("./pages", false, /page[0-9]+.js/);
const pagesCount = pagesContext.keys().length;

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      executedAnimations: {},
      pages: null
    };
  }

  componentWillMount() {
    Promise.all(
      [...new Array(pagesCount)].map((_, idx) =>
        import(`./pages/page${idx + 1}.js`).then(x => x.default)
      )
    )
      .then(pages => this.setState({ pages }))
      .then(() => {
        this.playAnimationsToCurrentPage(this.props);
      });
  }

  componentWillReceiveProps(nextProps) {
    if (this.pageFromProps(nextProps) !== this.pageFromProps(this.props)) {
      this.playAnimationsToCurrentPage(nextProps);
    }
  }

  playAnimationsToCurrentPage = props => {
    const { executedAnimations, pages } = this.state;
    if (!pages) {
      return;
    }
    const currentPage = this.pageFromProps(props);
    if (executedAnimations[currentPage]) {
      return;
    }
    // First undo any "present" and "future" animations
    [...new Array(pagesCount)]
      .map((_, idx) => idx + 1)
      .slice(currentPage - 1)
      .reverse()
      .forEach(pageNumber => {
        const { animation } = pages[pageNumber - 1];
        if (!executedAnimations[pageNumber] || !animation) {
          return;
        }
        animation.instance.seek(0);
        this.setState(() => ({
          executedAnimations: {
            ...executedAnimations,
            [pageNumber]: false
          }
        }));
      });
    // Then run any "past" animations
    [...new Array(currentPage - 1)].forEach((_, idx) => {
      const pageNumber = idx + 1;
      const { animation } = pages[idx];
      if (!executedAnimations[pageNumber] && !animation) {
        return;
      }
      animation.instance.seek(100);
      this.setState(() => ({
        executedAnimations: {
          ...executedAnimations,
          [pageNumber]: true
        }
      }));
    });
  };

  goToPage = e => {
    const href = e.target.getAttribute("data-href");
    e.preventDefault();
    const animateInNewPage = () => {
      this.props.history.push(href);
      cinderella()
        .add({
          targets: this.pageContainer,
          transform: {
            opacity: {
              from: 0,
              to: 1,
              duration: 500,
              easing: "easeInOutQuad"
            }
          }
        })
        .play();
    };
    cinderella({ onComplete: animateInNewPage })
      .add({
        targets: this.pageContainer,
        transform: {
          opacity: {
            from: 1,
            to: 0,
            duration: 500,
            easing: "easeInOutQuad"
          }
        }
      })
      .play();
  };

  pageContainerRef = pageContainer => {
    this.pageContainer = pageContainer;
  };

  pageFromProps = props => {
    const { location: { pathname } } = props;
    const currentPageMatch = /page([0-9]+)$/i.exec(pathname);
    return currentPageMatch ? parseInt(currentPageMatch[1], 10) : 1;
  };

  currentPage = () => this.pageFromProps(this.props);

  render() {
    const { pages } = this.state;
    if (!pages) {
      return null;
    }
    const { match: { path } } = this.props;
    const currentPage = this.currentPage();

    const pageRouteComponentFactory = ({ Prose, animation }) => () => (
      <div>
        {Prose && <Prose />}
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
        {animation && animation.notes && <Notes>{animation.notes}</Notes>}
      </div>
    );

    return (
      <NarrowContent>
        <H2>
          The Stubborn Triangle (<em>Work in progress</em>)
        </H2>
        <Stage>
          <Triangle className="triangle" />
        </Stage>
        <div ref={this.pageContainerRef}>
          <Switch>
            {[...new Array(pagesCount)].map((_, idx) => (
              <Route
                key={`page${idx}`}
                path={`${path}/page${idx + 1}`}
                component={pageRouteComponentFactory(pages[idx])}
              />
            ))}
            <Redirect to={`${path}/page1`} />
          </Switch>
          <Pager>
            <Anchor
              onClick={this.goToPage}
              href={`${path}/page${currentPage - 1}`}
              data-href={`${path}/page${currentPage - 1}`}
              disabled={currentPage === 1}
            >
              prev
            </Anchor>
            <Anchor
              onClick={this.goToPage}
              href={`${path}/page${currentPage + 1}`}
              data-href={`${path}/page${currentPage + 1}`}
              disabled={currentPage === pagesCount}
            >
              next
            </Anchor>
          </Pager>
        </div>
      </NarrowContent>
    );
  }
}
