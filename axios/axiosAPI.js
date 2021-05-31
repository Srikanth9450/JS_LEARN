const axios = require("axios").default;
axios.defaults.headers.common['X-Auth-Token'] = 'fe719dce59abd133dae6f35f324825d8'


//below function will give the return response if there is no error if there is any error it will show that error
function getget() {
    axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts'

        })
        .then(res => console.log(res))
        .catch(err => console.error(err));

};

//below function will access the resonse object from the api
function get() {
    return axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts?_length=5'
    })


}

function post() {
    return axios({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            params: {
                _limit: 5
            },
            data: {
                userId: '130',
                title: 'post1',
                body: 'this text was posted'
            }
        })
        .then(res => console.log(res));

}

//update
//put: this will delete all parameters and replace with new one
function put() {
    return axios({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            data: {
                //here we didn't mention the userId but it will be deleted and updated with below data only
                title: 'put',
                body: 'this text was posted'
            }
        })
        .then(res => Output(res));

}
//patch: it replaces the data we mention otherwise it can't do 
function patch() {
    return axios({
            method: 'patch',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            data: {
                //here we didn't mention the userId it won't be deleted and updated with below data only
                title: 'patch',
                body: 'this text was posted'
            }
        })
        .then(res => Output(res));

}

function delet() {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => Output(res)) // in this the entire data is deleted from the id 1 it will give you {}
        .catch(err => console.error(err));

}

//simultenious data
function simul() {
    axios.all(
            [
                axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3'),
                axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
            ]
        )
        .then(res => {
            Output(res[0]);
            Output(res[1]);
        })
        .catch(err => console.log(err));
}



function customHeaders() {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'sometoken'
        }
    }

    axios.post('https://jsonplaceholder.typicode.com/posts', {
            userId: '130',
            title: 'post1',
            body: 'this text was posted'
        }, config)
        .then(res => Output(res))
        .catch(err => console.error(err));

}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {

            title: 'hello world'
        },
        transformResponse: axios.defaults.transformResponse.concat(data => {
            data.title = data.title.toUpperCase();
            return data.title;
        })
    }
    axios(options).then(res => Output(res));
}

function Output(resp) {
    console.log(resp.data)
    console.log('------------------------\n------------------\n')
    console.log(resp.config)

    console.log(resp.headers)
}

//accessing the whole response data 

/* get().then(res => console.log(res)); */

//accessing the data in from the response
/* get().then(res => gettingdata(res)); */
//accessing the particular user data
/* get().then(res => console.log(res.data[0])); //here 0 is the index of the user data */
//getting headers
//get().then(res => console.log(res.headers));


/* console.log(post());
get().then(res => setTimeout(console.log, 1000, res.data[100])); */

/* put(); */
/* patch(); */
/* delet(); */

//INTERCEPTING REQUESTS &RESPONSES
/* axios.interceptors.request.use(config => {
    console.log(`${config.method.toUpperCase()} request to  ${config.url} at ${new Date().getTime()}`);
    return config
}, error => {
    return Promise.reject(error)
})
simul();
customHeaders(); */
/* transformResponse(); */


axios.get('http://api.weatherstack.com/current?access_key=fe719dce59abd133dae6f35f324825d8&query=India')
    .then(res => console.log(res.data));