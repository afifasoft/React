import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class CommentBox extends Component {
  //...

  render() {
    return (
      <div className="commentBox">
        <Post
          id={this.props.post.id}
          content: {this.props.post.content}
          user: {this.props.post.user}

          />
        {this.state.comments.map(function(comment) {
          return (
            <Comment
                key={comment.id}
                content: {comment.content}
                user: {comment.user}
              />
          );
        })}
        <CreateComment
          onCommentSubmit={this.handleCommentSubmit}
          />
      </div>
    );
  }
}

CommentBox.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object)
};

ReactDOM.render(
  <CommentBox
    comments={data.comments}
    post={data.post}
    />,
  node
)
