import React, { Component } from 'react';
import {connect} from 'react-redux'
import Feed from '../components/Feed'
import {watchFeed} from "../actions/getFeed";

class FeedContainer extends Component {

    render(){
        const {feed, loading, getFeed} = this.props;
        return (
            <Feed feed = {feed} loading = {loading} getFeed = {getFeed}/>
        )
    }
}

const mapStateToProps = state => ({
    feed : state.getFeed.currentFeed,
    loading : state.news.isFetching,
});

const mapDispatchToProps = dispatch => ({
    getFeed : (id) => dispatch(watchFeed(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed)