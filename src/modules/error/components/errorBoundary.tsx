import {Component, type ErrorInfo, type ReactNode} from "react";
import ViewBoundary from "@/modules/error/components/viewBoundary.js";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false, error: null};
  }

  static getDerivedStateFromError(error: any) {
    return {hasError: true, error};
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Index atrapado por ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      const message = this.state.error?.message || "Index desconocido";
      return <ViewBoundary message={message}/>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
