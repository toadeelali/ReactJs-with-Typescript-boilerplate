import React, { Component } from 'react';
import { Props, State } from './types';

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown): void {
    console.log(error, errorInfo);
  }

  // restartApp = () => {
  //   this.setState({ error: null });
  //   // this.props.dispatch(resetGlobal());
  // };

  render(): React.ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <div>Error Please consider refreshing the page</div>;
    }

    return children;
  }
}
