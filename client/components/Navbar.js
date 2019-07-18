import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
    constructor() {
        super()

        this.state = {

        }
    }


    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: !!state.user.id,
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);