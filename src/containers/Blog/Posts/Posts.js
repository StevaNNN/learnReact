import React from "react";
import { Route } from "react-router-dom";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";

import classes from "./Posts.module.scss";

class Posts extends React.Component {
    state = {
        posts: []
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
            .catch(err => console.log(err))
    }

    postClicked = (id) => {
        this.props.history.push({ pathname: '/posts/' + id })
    }

    render() {

        const posts = this.state.posts.map((post, id) => {
            return (
                // <Link
                //     to={'/' + post.id}
                //     key={id}
                // >
                    <Post
                        title={post.title}
                        key={id}
                        author={post.author}
                        clicked={() => this.postClicked(post.id)}
                    />
                // </Link>
            );
        });

        return (
            <div>
                <section className={classes.Posts}>{posts}</section>
                <Route path={this.props.match.url + '/:id'} exact component={ FullPost } />
            </div>
        )
    }
}

export default Posts;