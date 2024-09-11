import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
                {this.props.name(false)}  {/* Tampilkan 'Guest' jika tidak ada name */}
            </div>
        );
    }
}

export default User;
 