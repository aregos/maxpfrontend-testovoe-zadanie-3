export const getNews = async () => {
    try {
        const query = await fetch('http://127.0.0.1:5000/api/v1/feeds', {method: 'GET'})
            .then(async response => {
                if (response.ok) {
                    const res = response.json();
                    return res;
                } else {
                    throw new Error(response.status);
                }
            })
        return query;
    }
    catch (e) {
        console.log(e);
    }
};

export const getFeed = async (id) => {
    try {
        const query = await fetch(`http://127.0.0.1:5000/api/v1/feeds/${id}`,{method : 'GET', headers : {'accept' : 'application/json'}})
            .then(response => {
                if (response.ok) {
                    const res = response.json();
                    return res;
                }
                else {
                    throw new Error(response.status);
                }
            })
        return query;
    }
    catch (e) {
        console.log(e);
    }
};

export const updateFeed = async (id, title, content) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("x-access-token",localStorage.getItem('auth_token'));
        myHeaders.append("accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({"title" : title, "content" : content});
        const query = await fetch(`http://127.0.0.1:5000/api/v1/feeds/${id}`,
            {method : 'PUT', headers : myHeaders, body : body })
            .then(res => {
                if (res.ok){
                    const result = res.json();
                    return result;
                }
                else {
                    throw new Error(res.status);
                }
            });
        return query;
    }
    catch (e){
        console.log(e);
    }
};

export const deleteFeed = async (id) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("x-access-token", localStorage.getItem('auth_token'));
        myHeaders.append("accept", "application/json");
        const query = await fetch(`http://127.0.0.1:5000/api/v1/feeds/${id}`, {method : 'DELETE', headers : myHeaders})
            .then(res => {
                if (res.ok){
                    const result = res.json();
                    return result;
                }
                else {
                    throw new Error(res.status);
                }
            });
        return query;
    }
    catch (e) {
        console.log(e);
    }
};

export const addFeed = async (title, content) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append('accept', 'application/json');
        myHeaders.append('x-access-token', localStorage.getItem('auth_token'));
        myHeaders.append('Content-Type', 'application/json');
        const body = JSON.stringify({"title" : title, "content" : content});
        const query = await fetch('http://127.0.0.1:5000/api/v1/feeds', {method : 'POST', headers : myHeaders, body : body})
            .then(res => {
                if (res.ok){
                    const result = res.json();
                    return result;
                }
                else {
                    throw new Error(res.status);
                }
            })
        return query;
    }
    catch (e) {
        console.log(e);
    }
};