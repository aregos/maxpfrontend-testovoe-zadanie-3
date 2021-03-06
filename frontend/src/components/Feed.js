import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import {Grid, Row, Col, Button, ButtonToolbar} from 'react-bootstrap'
import {deleteFeed} from "../helpers/newsHelper";

class Feed extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getFeed(id);
    }

    deleteFeed = async () => {
        await deleteFeed(this.props.match.params.id).then(res => console.log(res));
        this.props.history.goBack();
    };

    render() {
        const {feed, loading, history, location, name} = this.props;

        const edit = () => {
            history.push({
                pathname : location.pathname + `/edit`,
                feed : this.props.feed,
            });
        };
        if (loading || !feed || !feed.creator) return <p>Loading...</p>;
        else {
            let data = new Date(feed.createDate);
            data = data.toLocaleString();
            const {displayName} = feed.creator;
            let buttonStyle = {
              display : name === displayName ? '' : 'none',
            };
            return (
                <Grid>
                <Row className="row mt-5 justify-content-start card border-dark">
                    <div className="card-body">
                        <Col md={9} xs={12} className="text-lg-left card-title">
                            {feed.title}
                        </Col>
                        <Col md={9} xs={12} className="text-lg-center font-italic font-weight-light card-text">
                            {feed.creator ? feed.creator.displayName : '-'}/{data}
                        </Col>
                        <Col md={9} xs={12} className="text-lg-left card-text">
                            {feed.content}
                        </Col>
                    </div>
                    <ButtonToolbar>
                        <Col md={3} xs={6}>
                            <Button bsStyle="primary" style={buttonStyle} bsSize="large" onClick={edit}>Редактировать</Button>
                        </Col>
                        <Col md={3} xs={6}>
                            <Button bsStyle="primary" style={buttonStyle} bsSize="large" onClick={this.deleteFeed}>Удалить</Button>
                        </Col>
                    </ButtonToolbar>
                </Row>
                </Grid>
                )
        }
    }
}


export default withRouter(Feed)