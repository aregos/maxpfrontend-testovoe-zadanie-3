import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
import {Grid, Row, Col, ButtonToolbar, Button} from 'react-bootstrap'
import {updateFeed} from "../helpers/newsHelper";

class Edit extends Component {

    state = {
        title : '',
        content : '',
    };

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getFeed(id);
        this.setState({
            title : this.props.feed.title,
            content : this.props.feed.content,
        })
    }

    changeTitle = (e) => {
        this.setState({
            title : e.target.value,
        })
    };

    changeContent = (e) => {
        this.setState({
            content : e.target.value,
        })
    };

    updateFeed = () => {
        const {id} = this.props.match.params;
        const {title , content} = this.state;
        updateFeed(id,title,content).then(res =>{
            console.log(res);
        });
        this.props.history.goBack();
    };

    cancel = () => {
        this.props.history.goBack();
    };

    render() {
        const {feed, loading} = this.props;
        if (loading || !feed) return <p>Loading...</p>;
        else {
            return (
                <Grid fluid={true}>
                    <Row>
                        <Col xs={12} md={8}>
                            <input className="form-control" type="text" onChange={this.changeTitle} value={this.state.title}/>
                        </Col>
                        <Col xs={12} md={8}>
                            <textarea rows = "7" onChange={this.changeContent} defaultValue={this.state.content}/>
                        </Col>

                    </Row>
                    <ButtonToolbar>
                        <Col md={3} xs={6}>
                            <Button bsStyle="primary" bsSize="large" onClick={this.updateFeed}>Сохранить</Button>
                        </Col>
                        <Col md={3} xs={6}>
                            <Button bsStyle="primary" bsSize="large" onClick={this.cancel}>Отменить</Button>
                        </Col>
                    </ButtonToolbar>
                </Grid>
            )
        }
    }

}

export default withRouter(Edit)