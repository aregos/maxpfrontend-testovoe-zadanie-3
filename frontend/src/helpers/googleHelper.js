import {auth} from './auth'

export const load = () => {
    window.gapi.load('auth2', function() {
        window.gapi.auth2.init({
            client_id : process.env.REACT_APP_GOOGLE_CLIENT_ID
        }).then(() => console.log('init OK'), () => console.log('init ERR'))
    });
};


export const signIn = async () => {
    const _authOk = (googleUser) => {
        const id_token = googleUser.getAuthResponse().id_token;
        localStorage.setItem('google_user', googleUser.getBasicProfile().getName());
        localStorage.setItem('google_token', id_token);
        auth(id_token).then(res => localStorage.setItem('auth_token',res.token));
        return {
            name : googleUser.getBasicProfile().getName(),
            id_token : id_token,
        };
    };
    const _authErr = () => 'auth err';
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    return await GoogleAuth.signIn({
        scope: 'profile email'
    }).then(_authOk, _authErr)
};

export const signOut = async () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    return await GoogleAuth.signOut().then(() => null, () => 'sign out ERROR');
};