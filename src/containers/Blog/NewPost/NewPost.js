import React, { Component } from 'react';
import classes from './NewPost.module.scss';
import axios from "../../../axios";

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }

    componentDidMount() {
        // if auth globaly is false
        // replace or redirect this page url to posts
        // otherwise give permision to see this page

        // this.props.history.replace('/posts);
    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author
        }
        axios.post('/posts', post)
            .then(response => {
                console.log(response)
                // changing url like this will push simply on page stack posts page url and if you click back it will lead you to new post page
                this.props.history.push('/posts')
                // replacing page url like this will remove the current page stack opposite to above implementation
                // this.props.history.replace('/posts')
            });
    }

    render () {
        return (
            <div className={classes.NewPost}>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.setState({title: event.target.value})}
                />
                <label>Content</label>
                <textarea
                    rows="4"
                    value={this.state.content}
                    onChange={(event) => this.setState({content: event.target.value})}
                />
                <label>Author</label>
                <select
                    value={this.state.author}
                    onChange={(event) => this.setState({author: event.target.value})}
                >
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>
                    Add Post
                </button>
            </div>
        );
    }
}

export default NewPost;