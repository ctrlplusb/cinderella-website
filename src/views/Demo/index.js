import React, { Component } from "react";
import Code from "../../components/Code";
import * as Styled from "./styled";

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
      source: null,
      Demo: null
    };
  }

  componentWillMount() {
    this.loadSample(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.loadSample(nextProps);
  }

  loadSample(props) {
    const { match } = props;
    const { params } = match;
    const { id } = params;
    const { current } = this.state;
    if (current !== id) {
      Promise.all([
        import(`../../samples/${id}/source.js`),
        import(`../../samples/${id}/Demo.js`)
      ]).then(([source, demo]) => {
        if (this.unmounted) return;
        this.setState({
          source: source.default,
          Demo: demo.default
        });
      });
    }
  }

  render() {
    const { source, Demo } = this.state;
    if (!source || !Demo) return null;
    return (
      <Styled.Container>
        <Styled.Column>
          <Code source={source} />
        </Styled.Column>
        <Styled.Column>
          <Demo />
        </Styled.Column>
      </Styled.Container>
    );
  }
}
