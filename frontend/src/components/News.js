import React, {Component} from 'react'
import ArticleContainer from '../containers/ArticleContainer'
import {withRouter} from "react-router-dom";

class News extends Component {

    componentDidMount() {
         this.props.getNews();
    }

    render(){
        const {news, loading} = this.props;
        if (loading === true) return <p>Loading...</p>;
        else
        return (
            <div className="container">
                    {news.map((item,index)=> {
                       return <ArticleContainer key = {index} item = {item} index = {index}/>
                    })}
            </div>
        )
    }

}

export default withRouter(News)