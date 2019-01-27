import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
import {deleteFeed} from "../helpers/newsHelper";

class Article extends Component {

    render() {
        const {item, index, history, location} = this.props;
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

        return (
                <div className="row mt-5 justify-content-start card border-dark" key={index}>
                    <div className="card-body">
                        <div className="col-md-3 text-lg-left card-title">
                            <button className="btn" onClick={pushWatch}>{item.title}</button>
                            <button className="btn" onClick={pushEdit}><span>✏️</span></button>
                            <button className="btn" onClick={removeFeed}> <span>  ❌</span> </button>
                        </div>
                        <div className="col-md-3 text-lg-center font-italic font-weight-light card-text">
                            {item.creator.displayName}/{data}
                        </div>
                        <div className="col-md-5 text-lg-left card-text">
                            {item.content}
                        </div>
                    </div>
                </div>
        )
    }
}

export default withRouter(Article)