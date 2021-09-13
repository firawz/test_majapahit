import axios from 'axios';

const get_post = (dispatch, action) => {
    axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch();
};
