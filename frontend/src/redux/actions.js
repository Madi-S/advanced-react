import {
    CREATE_POST,
    SHOW_LOADER,
    HIDE_LOADER,
    HIDE_ALERT,
    SHOW_ALERT,
    REQUEST_POSTS
} from './types'
import { sleep } from '../utils'

const ALERT_TIMEOUT = 4.3

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fetchPosts() {
    return {
        type: REQUEST_POSTS
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(message) {
    return async dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: message
        })
        await sleep(ALERT_TIMEOUT)
        dispatch(hideAlert())
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}
