import React, { Component } from 'react';
import FRInput from './FRInput'; // Mengimpor komponen FRInput

class FRParentInput extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef(); // Membuat ref untuk mengakses input di komponen anak
    }

    clickHandler = () => {
        this.inputRef.current.focus(); // Fokus pada input menggunakan ref
    }

    render() {
        return (
            <div>
                <FRInput ref={this.inputRef} /> {/* Mengirim ref ke komponen anak */}
                <button onClick={this.clickHandler}>Focus Input</button> {/* Fokus pada input saat tombol diklik */}
            </div>
        );
    }
}

export default FRParentInput;

