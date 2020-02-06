import React from "react";
import { node } from "prop-types";

class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  static propTypes = {
    children: node
  };

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    return isError ? <div>Something went wrong!</div> : children;
  }
}

export { DefaultErrorBoundary };
