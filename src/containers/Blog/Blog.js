import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import asyncComponent from "../../hoc/asyncComponent";
import Posts from './Posts/Posts'
import classes from './Blog.module.scss';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
});

class Blog extends Component {

    state = {
        auth: true
    }

    render () {

        return (
            <div>
                <header>
                    <nav className={classes.Blog}>
                        <ul>
                            <li>
                                <NavLink
                                    to="/posts"
                                    exact
                                    activeClassName="active"
                                    activeStyle={{
                                        color: '#fa923f'
                                    }}
                                >
                                    Posts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/new-post'
                                    activeStyle={{
                                        color: '#fa923f'
                                    }}
                                >
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth && <Route path="/new-post" component={ AsyncNewPost } />}
                    <Route path="/posts" component={ Posts } />
                    <Route render={() => <h1>Not Found</h1>}/>
                    {/*redirect helps guards to redirect to whatever page */}
                    {/*<Redirect from="/" to='/posts'/>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;