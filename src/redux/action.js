import axios from 'axios';

export const getPost = () => {
    return async (dispatch, getState) => {
        const resp = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        );
        const { data } = resp;
        // console.log(data, 'ini response');
        dispatch({
            type: 'GET_POST',
            payload: {
                post: data,
            },
        });
    };
};
