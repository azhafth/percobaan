import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false // Perbaikan dari False ke false
        };
    }

    // render() {
    //     this.state.isLoggedIn && <div> Welcome azha</div>
    //     // return this.state.isLoggedIn ? (
    //     //     <div>Welcome azha</div> 
    //     // ): (
    //     //     <div>Welcome Guest</div>
    //     // )

    //     // let message
    //     // if (this.state.isLoggeddIn) {
    //     //     message = <div> welcome azha</div>

    //     // }else {
    //     //     message =<div> Welcome guest</div>
    //     // }

    //     // return <div>{message}</div>
    //     // if (this.state.isLoggedIn) {
    //     //     return (
    //     //         <div>
    //     //             Welcome Azha
    //     //         </div>
    //     //     );
    //     // } else {
    //     //     return (
    //     //         <div>
    //     //             Welcome Guest
    //     //         </div>
    //     //     );
    //     }
    }


export default UserGreeting;
