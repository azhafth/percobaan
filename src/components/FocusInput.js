import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef(); // Membuat ref untuk elemen input
    }

    focusInput = () => {
        this.inputRef.current.focus(); // Fokus pada input
    }

    render() {
        return <input type="text" ref={this.inputRef} />; // Menghubungkan ref ke input
    }
}

class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef(); // Membuat ref untuk komponen Input
    }

    clickHandler = () => {
        this.componentRef.current.focusInput(); // Memanggil method focusInput dari komponen Input
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef} /> {/* Menghubungkan ref ke komponen Input */}
                <button onClick={this.clickHandler}>Focus Input</button> {/* Memanggil fokus pada input saat tombol diklik */}
            </div>
        );
    }
}

export default FocusInput;
