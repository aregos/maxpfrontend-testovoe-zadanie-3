import React, { Component } from 'react'
import {Grid, Row, Col, Button, ButtonToolbar} from "react-bootstrap";
import {addFeed} from '../helpers/newsHelper';
import {withRouter} from "react-router-dom";

class AddFeed extends Component {

    state = {
        title : '',
        content : '',
    };

    addFeed = () => {
        const {title, content} = this.state;
        const {history} = this.props;
        addFeed(title,content).then(res => console.log(res));
        history.goBack();
    };

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

    render() {
        return (
            <Grid fluid={true}>
                <p>Добавить новость</p>
                <Row>
                    <Col xs={6} md={3}>
                        <p>Заголовок</p>
                        <input type="text" onChange={this.changeTitle}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={3}>
                        <p>Контент</p>
                        <textarea onChange={this.changeContent}>{}</textarea>
                    </Col>
                </Row>
                <Row>
                    <ButtonToolbar>
                        <Button bsStyle="primary" onClick={this.addFeed}>Сохранить</Button>
                        <Button bsStyle="primary">Отменить</Button>
                    </ButtonToolbar>
                </Row>
            </Grid>
        )
    }
}

export default withRouter(AddFeed);