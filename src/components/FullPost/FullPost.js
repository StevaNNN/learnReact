import React, { Component } from 'react';
import classes from './FullPost.module.scss';
import axios from "../../axios";

class FullPost extends Component {
    state = {
        loadedPost: {}
    }

    // here when this component does eventualy get id after clicking on some post
    // this function will trigger so it would be great to fetch data for specific post here
    // we should keep in mind that we are setting setState from within componentDidUpdate so this will set infinite loop
    // if we don't handle this on proper way
    componentDidUpdate() {
        console.log(this.state.loadedPost.id)
        // checks if props is not null
        if (this.props.id !== null) {
            // check if state loadedPost.id is not the same as the id get from props.id
            // this we must do because if we do't infinite loop will be triggered in following order
            // 1. user clicks on some post
            // 2. that posts id is glued to the this.props.id of this component
            // 3. componentDidUpdate is called once
            // 4. we are settingState of this component in .THEN promise inside ajax call
            // 5. componentDidUpdate is called second time
            // 6. again we are triggering request for same post and settingState of this component in .THEN promise inside ajax call
            // ......
            if(this.state.loadedPost.id !== this.props.id) {
                console.log(this.state.loadedPost.id)
                // only then fetch data for loadedPost state
                axios.get(`/posts/${this.props.id}`)
                    .then(response => {
                        this.setState({loadedPost: response.data})
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.id}`)
            .then(res => console.log(res))
    }

    render () {
        // console.log(this.state)
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.state.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if(this.state.loadedPost) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={classes.Edit}>
                        <button onClick={this.deletePostHandler} className={classes.Delete}>Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;