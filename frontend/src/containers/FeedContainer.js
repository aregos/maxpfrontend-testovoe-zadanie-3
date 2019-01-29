import React, { Component } from 'react';
import {connect} from 'react-redux'
import Feed from '../components/Feed'
import {watchFeed} from "../actions/getFeed";

class FeedContainer extends Component {

    render(){
        const {feed, loading, getFeed, id_token} = this.props;
        return (
            <Feed feed = {feed}
                  loading = {loading}
                  getFeed = {getFeed}
                  id_token = {id_token}
            />
        )
    }
}

const mapStateToProps = state => ({
    feed : state.getFeed.currentFeed,
    loading : state.news.isFetching,
    id_token : state.google.id_token,
    name : state.google.name,
});

const mapDispatchToProps = dispatch => ({
    getFeed : (id) => dispatch(watchFeed(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed)