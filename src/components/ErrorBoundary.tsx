import React from "react";

import { sendLog } from "../util/logger";

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        // Log the error to the server
        sendLog(`Client-side error: ${error.message}`, "error");
    }

    render() {
        if (this.state.hasError) {
            // Render fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
