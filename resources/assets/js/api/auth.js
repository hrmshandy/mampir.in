export default {
    user: {
        authenticated: false
    },
    login(creds) {
        return new Promise((resolve, reject) => {
            axios.post('/login', creds).then(response => {
                localStorage.setItem('jwt-token', response.data.token);
                this.user.authenticated = true;

                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },
    logout() {
        return new Promise((resolve, reject) => {
            localStorage.removeItem('jwt-token');
            this.user.authenticated = false;

            resolve(response);
        });
    },
    checkAuth() {
        var jwt = localStorage.getItem('jwt-token');
        if (jwt) {
            this.user.authenticated = true;
        } else {
            this.user.authenticated = false;
        }
    },
    getAuthHeader() {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')
        }
    }
}
