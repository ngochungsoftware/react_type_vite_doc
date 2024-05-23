// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         const res = JSON.parse(this.responseText);
//         let html = ''
//         res.data.forEach((item) => {
//             html+= `<div>${item.first_name}</div>`
//         })

//         document.getElementById('results').innerHTML = html
//         console.log(res)
//     }
// }
// xhttp.open('GET', 'https://reqres.in/api/users?page=2', true);

// xhttp.send()

// fetch('https://reqres.in/api/users?page=2').then((res) => {
//     console.log(res)
// })

// khoong bat duoc loi cua server

// axios

// axios.get('https://reqres.in/api/users?page=2').then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })


const http = axios.create({
    baseURL: 'https://reqres.in/api'
})

http.interceptors.request.use((config) => {
    console.log(config)
    config.headers.Timeout = 100
    return config
}, (error) => {
    return Promise.reject(error);
})

http.interceptors.response.use((config) => {
    console.log(config)
    return config.data
}, (error) => {
    return Promise.reject(error);
})


http
    .get('/users/2')
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.warn(err)
    });