import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, showLoader, hideLoader } from '../redux/actions'

import Loader from './Loader'
import Post from './Post'

export default () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const posts = useSelector(state => state.posts.fetchedPosts)

    if (loading) {
        return <Loader />
    }

    if (!posts.length) {
        return (
            <button
                className='btn btn-primary'
                onClick={async () => dispatch(fetchPosts())}
            >
                Load posts
            </button>
        )
    }
    return posts.map(post => <Post key={post.id} post={post} />)
}
