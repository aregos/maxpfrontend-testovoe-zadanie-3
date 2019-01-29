import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
import {deleteFeed} from "../helpers/newsHelper";

class Article extends Component {

    render() {
        const {item, index, history, location, id_token} = this.props;
        const id = item._id;
        let data = new Date(item.createDate);
        data = data.toLocaleString();

        const pushWatch = () => {
            history.push({
                pathname : location.pathname + `/${id}`,
                feed : item,
            })
        };

        const pushEdit = () => {
            history.push({
                pathname : location.pathname + `/${id}/edit`,
                feed : item,
            });
        };

        const removeFeed = () => {
            deleteFeed(id).then(res => console.log(res));
        };

        const buttonStyle = {
            display : id_token ? '' : 'none',
        };

        return (
                <div className="row mt-5 justify-content-start card border-dark" key={index}>
                    <div className="card-body">
                        <div className="col-md-9 col-xs-9 text-lg-center card-title">
                            <button className="btn" onClick={pushWatch}><span className="font-weight-bolder">{item.title}</span></button>
                            <div style={buttonStyle}>
                            <button className="btn" onClick={pushEdit}><span>✏️</span></button>
                            <button className="btn" onClick={removeFeed}> <span>  ❌</span> </button>
                            </div>
                        </div>
                        <div className="col-md-9 text-lg-left font-italic font-weight-light card-text">
                            <span> {item.creator.displayName}/{data} </span>
                        </div>
                        <div className="col-md-9 text-lg-left card-text">
                            <span className="news_text"> {item.content} </span>
                        </div>
                    </div>
                </div>
        )
    }
}

export default withRouter(Article)