import React, {Component} from 'react'
import { load } from '../helpers/googleHelper'
import {withRouter} from "react-router-dom";

class Header extends Component {

    componentDidMount() {
        load();
    }



    render() {
        const {name, error, loading, signIn, signOut, history, location, id_token} = this.props;

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
            <div className="row">
                <div className="col-md-3">
                    <p className="font-weight-bold">Главная</p>
                </div>
                <div className="col-md-3 offset-5">
                    {!!name && <p>{name}</p>}
                    {!name && <button onClick={signIn}>Войти</button>}
                    {!!name && <button onClick={signOut}>Выйти</button>}
                </div>
                <div className="col-md-3">
                <button className="btn btn-primary" onClick={addBtn} style={buttonStyle}>Добавить новость</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)