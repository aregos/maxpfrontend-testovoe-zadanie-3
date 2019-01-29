import React, {Component} from 'react'
import {connect} from 'react-redux'
import News from '../components/News'
import {fetchNews} from '../actions/news'


class NewsContainer extends Component {


    render(){
        const {news, loading, getNews} = this.props;
        return(
            <News news = {news} loading = {loading} getNews = {getNews}/>
        )
    }
}

const mapStateToProps = state => ({
    news : state.news.news,
    loading : state.news.isFetching,
});

const mapDispatchToProps = dispatch => ({
    getNews : () => dispatch(fetchNews()),
});


export default connect(mapStateToProps, mapDispatchToProps)(News)