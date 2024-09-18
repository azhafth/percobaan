import React , {Component}  from "react";
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post:[]
        }
    }
    componentDidMount() {
        axios.get()
    }
    render () {
        return (
            <div>
                List Of Post
            </div>
        )
    }
}

export default PostList