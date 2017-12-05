import { Children, Component } from "react";
import GoogleAnalytics from "react-ga";

/*
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-89235861-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-89235861-2');
</script>
*/

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
