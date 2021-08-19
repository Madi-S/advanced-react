import { showAlert } from './actions'
import { CREATE_POST } from './types'

const forbiddenWords = ['fuck', 'python sucks', 'shit', 'nigger']

export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = forbiddenWords.filter(w =>
                    action.payload.title.includes(w)
                )
                if (found.length) {
                    return dispatch(showAlert('Title contains forbidden words'))
                }
            }
            return next(action)
        }
    }
}
