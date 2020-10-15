import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import fetchApi from '../api/fetchApi'
import { connect } from "react-redux";
import * as actionCreator from "../store/action/likeDislikeAction";
class Homepage extends Component {
    constructor(){

    super()
    this.state = {
        apiValue: []
    }
    }
    componentDidMount = async () => {
        let apiValue = await fetchApi()

        this.setState({ apiValue: apiValue })
    }
    componentWillReceiveProps(nextProps){
        console.log("this.props",nextProps)
    }

    render() {
        console.log("chekcing",this.props)
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
                                    {post.id}
                                    <FontAwesomeIcon className="like-icon" onClick={() => this.props.likeDislike(post.id)} icon={faThumbsUp} />
                                    <div>
                                        {/* {console.log("element")}
                                        {this.props.countValue.length !== 0 ?
                                            this.props.countValue.map(element => {
                                                if (element.id === post.id) {
                                                    console.log(element)
                                                   return element.like
                                                }
                                            })
                                            : ""
                                        } */}


                                        {/* {post.like} */}
                                    </div>
                                    <FontAwesomeIcon className="dislike-icon" icon={faThumbsDown} />
                                    <div>
                                        {post.dislike}
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
    ///console.log(state)
    return {
        countValue: state.count
    };
};
const mapDispatchToProps = dispatch => {
    return {
        likeDislike: (data) => dispatch(actionCreator.likeDislike(data))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage);
