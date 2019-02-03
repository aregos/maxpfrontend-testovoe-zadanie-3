import React, {Component} from 'react';
import {connect} from 'react-redux'
import Article from '../components/Article';

class ArticleContainer extends Component {
    render() {
        return (
            <Article id_token = {this.props.id_token}/>
        );
    }
}

const mapStateToProps = state => ({
    name : state.google.name,
});

export default connect(mapStateToProps)(Article);