import React, { Component } from "react";
import GoogleAnalytics from "react-ga";

export default function withTracker(WrappedComponent, options = {}) {
  const trackPage = page => {
    GoogleAnalytics.set({
      page,
      ...options
    });
    GoogleAnalytics.pageview(page);
  };

  return class extends Component {
    componentDidMount() {
      if (process.env.NODE_ENV === "production") {
        const page = this.props.location.pathname;
        trackPage(page);
      }
    }

    componentWillReceiveProps(nextProps) {
      if (process.env.NODE_ENV === "production") {
        const currentPage = this.props.location.pathname;
        const nextPage = nextProps.location.pathname;

        if (currentPage !== nextPage) {
          trackPage(nextPage);
        }
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
