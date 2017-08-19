import auth from '../api/auth'

export default {
    request(request) {
        var token, headers;

        token = localStorage.getItem('access_token');
        headers = request.headers || (request.headers = {});

        if ( token !== null && token !== 'undefined') {
            headers.Authorization = 'Bearer ' + token;
        }

        return request;
    },
    requestError(error) {
        return Promise.reject(error);
    },
    response(response) {
        if (response.status && response.status == 401) {
            auth.logout();
        }
        // if (response.headers && response.headers.Authorization) {
        //     localStorage.setItem('access_token', response.headers.Authorization)
        // }
        // if (response.data && response.data.access_token && response.data.access_token.length > 10) {
        //     localStorage.setItem('jwt-token', 'Bearer ' + response.data.token);
        // }
        return response;
    },
    responseError(error) {
        return Promise.reject(error);
    }
}
