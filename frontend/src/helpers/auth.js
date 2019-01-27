
export const auth = async (id_token) => {
    try {
        const str = `token=${id_token}`;
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        const query = await fetch('http://127.0.0.1:5000/api/v1/auth/google',{method: 'POST', headers : myHeaders, body: str, credentials : "omit"})
            .then(res => {
                if (res.ok) {
                    const result = res.json();
                    return result;
                } else {
                    throw new Error(res.status);
                }
            })
        return query;
    }
    catch (e) {
        console.log(e);
    }
};