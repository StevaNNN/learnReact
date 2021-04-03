import React, { Component } from 'react';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.scss';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        errorMessage: null
    }

    componentDidMount() {
        axios.get('/posts')
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map((post, id) => {
                    return {
                        ...post,
                        author: 'Steva'
                    }
                })
                this.setState({
                    posts: updatedPosts
                })
            })
            .catch(err => {this.setState({errorMessage: err.message})})
    }

    postClicked = (id) => {
        this.setState({selectedPostId: id})
    }

    render () {
        // console.log(this.state)

        const test = this.state.errorMessage && <p>{this.state.errorMessage}</p>

        const posts = this.state.posts.map((post, id) => {
            return (
                    <Post
                        title={post.title}
                        key={id}
                        author={post.author}
                        clicked={() => this.postClicked(post.id)}
                    />
                );
        })
        return (
            <div>
                {test}
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    {/* Populate full post ID PROP with id of selected post*/}
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;