import API from '../../API';
import { fetchPostsAction, addPostAction, deletePostAction } from './actions';

const api = new API();

export const fetchPosts = params => {
    return dispatch => {
        return api
            .getPosts(params)
            .then(posts => {
                dispatch(fetchPostsAction(posts));
            })
           
    };
};

export const deletePost = id => {
    return dispatch => {
        return api
            .deletePost(id)
            .then(() => {
                dispatch(deletePostAction(id));
            })
            
    };
};

export const addPost = postBody => {
    const { name, body } = postBody;
    return dispatch => {
        // Validation
        if (name === '' || body === '') {
            alert('Please fill out name and body.');
            return false;
        }

        return api
            .addPost(postBody)
            .then(post => {
                dispatch(addPostAction(post));
            })
           
    };
};
