import React, { Component } from 'react';
import { connect } from 'react-redux';
// import brandImage from "../../public/images/rose-hunter-brand.png"

class Navbar extends Component {
    constructor() {
        super()

        this.state = {

        }
    }


    render() {
        return (
            <nav className="navbar">
                <div className="navbar__top-section">
                    <h3>Registered Nutritional Therapist</h3>
                    <p>FdSc, Dip Ion</p>
                </div>
                <div className="navbar__main">
                    <div className="navbar__main--icon-section">
                        {/* <img src={brandImage} /> */}
                    </div>
                    <div className="navbar__main--dropdown-buttons">
                            {/* <ul>
                                <li>
                                    About
                                </li>
                                <li>
                                    Blog
                                </li>
                                <li>
                                    Recipes
                                </li>
                            </ul> */}
                    </div>
                </div>
            </nav>
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