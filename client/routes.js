import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { me } from './store';
import { Route } from 'react-router-dom';
import { Home, SubmitBlogPage, SubmitRecipe } from './components';

class Routes extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    componentDidMount() {
        this.props.loadUserData();
    }


    render() {

        return (
            <div className="routes__container">
                <Switch>
                    {/* <Route exact path="/" component={Home} /> */}
                    <Route path="/add-blog-post" component={SubmitBlogPage} />
                    <Route path="/add-recipe" component={SubmitRecipe} />
                </Switch>
            </div>
        );

    };
};


const mapDispatchToProps = dispatch => ({
    loadUserData: () => dispatch(me())
});

export default connect(null, mapDispatchToProps)(Routes);