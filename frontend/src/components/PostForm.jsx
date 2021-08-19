import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost, showAlert } from '../redux/actions'
import Alert from './Alert'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    submitHanlder = event => {
        event.preventDefault()
        const { title } = this.state

        if (title.trim().length < 5) {
            return this.props.showAlert(
                'Title is too short (minimum 5 characters)'
            )
        }

        const newPost = {
            title,
            id: Date.now().toString()
        }

        this.props.createPost(newPost)
        this.setState({ title: '' })
    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({
            ...prev,
            ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHanlder}>
                {this.props.alert && <Alert message={this.props.alert} />}

                <div className='form-group'>
                    <label htmlFor='title'>Post title</label>
                    <input
                        type='text'
                        className='form-control'
                        id='title'
                        value={this.state.title}
                        name='title'
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className='btn btn-success' type='submit'>
                    Submit
                </button>
            </form>
        )
    }
}

const mapDispatchToProps = { createPost, showAlert }

const mapStateToProps = state => {
    return {
        alert: state.app.alert
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
