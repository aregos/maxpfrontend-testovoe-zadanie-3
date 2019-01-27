import React, { Component } from 'react'
import { connect } from 'react-redux'
import Edit from '../components/Edit'
import {watchFeed} from "../actions/getFeed";

class EditContainer extends Component {
    render(){
        const {feed,loading,getFeed} = this.props;
        return(
            <Edit feed = {feed} loading = {loading} getFeed = {getFeed}/>
        )
    }
}

const mapStateToProps = state => ({
    feed : state.getFeed.currentFeed,
    loading : state.getFeed.isFetching,
});

const mapDispatchToProps = dispatch => ({
    getFeed : (id) => dispatch(watchFeed(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit)