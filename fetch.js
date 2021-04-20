const { default: axios } = require('axios');
const fs = require('fs');

const fetchPosts = () => {
    const url = "http://jsonplaceholder.typicode.com/posts";

    return axios.get(url).then(({data}) => {
        console.log(JSON.stringify(data));
        fs.writeFile('result/posts.json', JSON.stringify(data), (err) => {
            if (err) throw err
        }); 
    }).catch(error => {
        console.log(error)
    })
}

fetchPosts()
 