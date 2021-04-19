import React from "react";

import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from "./ErrorBoundary.interface";

import { ERROR_BOUNDARY_MESSAGE } from "../../../constants/mainPageConstants";

import { ErrorMessageBlock, ErrorHeader } from "./ErrorBoundary.style";

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render(): React.ReactElement | React.ReactNode {
    if (this.state.hasError) {
      return (
        <ErrorMessageBlock>
          <ErrorHeader>{ERROR_BOUNDARY_MESSAGE}</ErrorHeader>
        </ErrorMessageBlock>
      );
    }

    return this.props.children;
  }
}
