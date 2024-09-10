import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef(); // Membuat ref untuk input
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element 
        }
    }

    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
    //     this.inputRef.current.focus(); // Mengatur fokus pada input setelah komponen dipasang
    //     console.log(this.inputRef); // Melihat ref di console
    }

    clickHandler = () => {
        alert(this.inputRef.current.value); // Menampilkan nilai input saat tombol diklik
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} /> {/* Menghubungkan ref ke elemen input */}
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button> {/* Tombol untuk memicu alert */}
            </div>
        );
    }
}

export default RefsDemo;
