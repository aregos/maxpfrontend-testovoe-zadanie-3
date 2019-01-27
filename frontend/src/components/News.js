import React, {Component} from 'react'
import Article from './Article'
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
            <div className="container offset-1">
                    {news.map((item,index)=> {
                       return <Article key = {index} item = {item} index = {index}/>
                    })}
            </div>
        )
    }

}

export default withRouter(News)