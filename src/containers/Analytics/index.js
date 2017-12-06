import { Children, Component } from "react";
import GoogleAnalytics from "react-ga";

export default class Analytics extends Component {
  componentWillMount() {
    if (process.env.NODE_ENV === "production") {
      GoogleAnalytics.initialize("UA-89235861-2");
    }
  }

  render() {
    return Children.only(this.props.children);
  }
}
