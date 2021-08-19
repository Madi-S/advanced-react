import { CREATE_POST, FETCH_POSTS } from '../types'

const initialState = {
    posts: [],
    fetchedPosts: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return { ...state, posts: state.posts.concat([action.payload]) }

        case FETCH_POSTS:
            console.log('Fetching posts')
            return { ...state, fetchedPosts: action.payload }

        default:
            return state
    }
}
