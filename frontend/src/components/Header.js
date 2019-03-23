import React, {Component} from 'react'
import { load } from '../helpers/googleHelper'
import {withRouter} from "react-router-dom";

class Header extends Component {

    componentDidMount() {
        load();
    }

    render() {
        const {name, image, error, loading, signIn, signOut, history, location, id_token} = this.props;

        const addBtn = () => {
            history.push({
                pathname : location.pathname + '/addFeed/',
            })
        };

        const buttonStyle = {
            display : id_token ? '' : 'none',
        };

        if (loading) return <p>Loading...</p>;
        else if (error) return <p>{error}</p>;
        else
        return (
            <React.Fragment>
            <div className="row border-bottom border-dark rounded-bottom">
                <div className="col-md-3">
                    <span className="font-weight-bold logo">Saint-Russian News</span>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-dark news_text sticky-top" onClick={addBtn} style={buttonStyle}>Добавить новость</button>
                </div>
                <div className="col-md-3">
                    {!!name && <p>{name}</p>}
                    {!!image && <img className="rounded-circle img-fluid mx-1" src={image} alt={image}/>}
                    {!name && <button className="btn btn-dark" onClick={signIn}>Войти</button>}
                    {!!name && <button className="btn btn-dark" onClick={signOut}>Выйти</button>}
                </div>
            </div>

            </React.Fragment>
        )
    }
}

export default withRouter(Header)