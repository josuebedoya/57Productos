import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Index atrapado por ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='p-10 text-red-600 text-lg flex items-center justify-center flex-col'>
          <h2 className='font-bold family-oswald'>!Ups¡ Algo salió mal 😢</h2>
          <h3>Error:</h3>
          <p className='bg-gray-600 rounded-lg p-6 text-white max-w-95 w-full'>{this.state.error?.message || "Index desconocido"}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
