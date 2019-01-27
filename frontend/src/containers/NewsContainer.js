import React, {Component} from 'react'
import {connect} from 'react-redux'
import News from '../components/News'
import {fetchNews} from '../actions/news'


class NewsContainer extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props.news.length !== nextProps.news.length) return true;
    }

    render(){
        const {news, loading, getNews, id} = this.props;
        return(
            <News news = {news} loading = {loading} getNews = {getNews} id = {id}/>
        )
    }
}

const mapStateToProps = state => ({
    news : state.news.news,
    loading : state.news.isFetching,
    id : state.google.id_token,
});

const mapDispatchToProps = dispatch => ({
    getNews : () => dispatch(fetchNews()),
});


export default connect(mapStateToProps, mapDispatchToProps)(News)