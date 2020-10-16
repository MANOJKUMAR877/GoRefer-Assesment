import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import fetchApi from '../api/fetchApi'
import { connect } from "react-redux";
import * as actionCreator from "../store/action/likeDislikeAction";
import * as actionCreato from "../store/action/dislike";
class Homepage extends Component {
    constructor() {

        super()
        this.state = {
            apiValue: []
        }
    }
    componentDidMount = async () => {
        let apiValue = await fetchApi()

        this.setState({ apiValue: apiValue })
    }
    // componentWillReceiveProps(nextProps) {
    //     console.log("this.props", nextProps)
    // }
    handleLike = (id, count) => {
        let api = this.state.apiValue
        this.setState({ apiValue: api })
        // console.log("id", id, count)
        this.props.likeDislike(id, count)
    }
    handledislike = (id, count) => {
        let api = this.state.apiValue
        this.setState({ apiValue: api })
        // console.log("id", id, count)
        this.props.dislike(id, count)
    }


    render() {
        // console.log("chekcing", this.props)
        return (
            <div>
                <ul className="posts">
                    {
                        this.state.apiValue.map((post) =>

                            <li className="list" key={post.id} >

                                <div className="post">
                                    <Link to={{ pathname: '/postDetailPage', aboutProps: { title: post.title, body: post.body } }} >
                                        <div className="post-title">
                                            {post.title}

                                        </div>
                                    </Link>

                                    <div className="post-body">
                                        {post.body}
                                    </div>
                                    <FontAwesomeIcon className="like-icon" onClick={() => this.handleLike(post.id, this.props.countValue)} icon={faThumbsUp} />
                                    <div className="likeCount">

                                        {this.props.countValue !== undefined && this.props.countValue.length !== 0 ?
                                            this.props.countValue.map(element => {
                                                if (element.id === post.id) {
                                                    // console.log("element", element)
                                                    return element.like
                                                }
                                            })
                                            : ""
                                        }
                                    </div>
                                    <FontAwesomeIcon className="dislike-icon" onClick={() => this.handledislike(post.id, this.props.countValue)} icon={faThumbsDown} />
                                    <div className="dislikeCount">

                                        {this.props.countValue !== undefined && this.props.countValue.length !== 0 ?
                                            this.props.countValue.map(element => {
                                                if (element.id === post.id) {

                                                    return element.dislike
                                                }
                                            })
                                            : ""
                                        }
                                    </div>
                                </div>

                            </li>

                        )
                    }

                </ul>
            </div>
        )
    }
}
const mapStateToProps = state => {
    // console.log("state", state)
    return {
        countValue: state.count.count_list
    };
};
const mapDispatchToProps = dispatch => {
    return {
        likeDislike: (data, count) => dispatch(actionCreator.likeDislike(data, count)),
        dislike: (data, count) => dispatch(actionCreato.dislike(data, count))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage);
