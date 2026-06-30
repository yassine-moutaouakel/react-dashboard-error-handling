'use client';

import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    if (this.state.error) {
      return (
        <article className="card error-card" role="alert">
          <p className="eyebrow">Error</p>
          <h2>{this.props.title}</h2>
          <p>{this.state.error.message}</p>
        </article>
      );
    }

    return this.props.children;
  }
}
