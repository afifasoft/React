import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";


const node = document.getElementById("root");


class Post extends React.Component {

  render() {
    return React.createElement(
      "div",
      {
        className: "post"
      },

      React.createElement(
        "h2",
        {
          className: "postAuthor",
          id: this.props.id
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "postBody"
          },
          this.props.content
        ),
        this.props.children
      )
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};


class Comment extends React.Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "comment"
      },
      React.createElement(
        "h2",
        {
          className: "commentAuthor"
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "commentContent"
          },
          this.props.content
        )
      )
    );
  }
}


Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};



class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      content: "",
      user: ""
    };
  }


  render() {
    return React.createElement(
      "form",
      {
        className: "createComment",

      },
      React.createElement(
        "input",
        {
          type: "text",
          placeholder: "Your name",
          value: this.state.user,
        }
      ),
      React.createElement(
        "input",
        {
          type: "text",
          placeholder: "Thoughts?",
          value: this.state.content
        }
      ),
      React.createElement(
        "input",
        {
          type: "submit",
          value: "Post"
        }
      )

    );
  }
}


CreateComment.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
  content: PropTypes.string
}
