import React, {Component} from 'react'
import Header from '../components/Header'
import {connect} from 'react-redux'
import {logIn, logOut} from "../actions/google";

class HeaderContainer extends Component {

    render(){
        return(
            <Header
                name = {this.props.name}
                error = {this.props.error}
                loading = {this.props.loading}
                logIn = {this.props.signIn}
                logOut = {this.props.signOut}
            />
        )
    }
}

const mapStateToProps = state => ({
    name : state.google.name,
    id_token : state.google.id_token,
    error : state.google.error,
    loading : state.google.isFetching,
});

const mapDispatchToProps = dispatch => ({
    signIn : () => dispatch(logIn()),
    signOut : () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)