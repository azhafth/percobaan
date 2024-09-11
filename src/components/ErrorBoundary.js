import React, { Component } from 'react'; // Perbaikan: mengimpor Component dari React

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    // Fungsi ini digunakan untuk mengupdate state jika terjadi error
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // Method untuk logging error secara lebih rinci (opsional)
    componentDidCatch(error, info) {
        console.log("Error:", error);
        console.log("Error Info:", info);
    }

    render() {
        // Jika terjadi error, tampilkan fallback UI
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        // Jika tidak ada error, tampilkan children (komponen lainnya)
        return this.props.children;
    }
}

export default ErrorBoundary;
