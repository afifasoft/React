//...

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      user: ''
    };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleTextChange (event) {
    const val = event.target.value;
    this.setState( () => ({
      content: val
    }));
  }

  handleUserChange (event) {
    const val = event.target.value;
    this.setState( () => ({
      user: val
    }));
  }

  handleSubmit (event) {
    event.preventDefault();
    this.setState( () => ({
      user: '',
      content: ''
    }));
  }

  render() {
    return React.createElement(
      'form',
      {
        className: 'createComment',
        onSubmit: this.handleSubmit
      },
      React.createElement(
        'input',
        {
          type: 'text',
          placeholder: 'Your name',
          value: this.state.user,
          onChange: this.handleUserChange
        }
      ),
      React.createElement(
        'input',
        {
          type: 'text',
          placeholder: 'Thoughts?',
          value: this.state.content,
          onChange: this.handleTextChange
        }
      ),
      React.createElement(
        'input',
        {
          value: 'submit',
          value: 'Post'
        }
      )
    );
  }
}

CreateComment.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
  content: React.PropTypes.string
  
};

//...
const App = React.createElement(
  Post,
  {
    id: 1,
    content: ' said: This is a post!',
    user: 'mark'
  },
  React.createElement(Comment, {
    id: 2,
    user: 'bob',
    content: ' commented: wow! how cool!'
  }),
  React.createElement(CreateComment)
);


// To update the state within a React class Component  - this.setState()

this.setState(
  function(prevState, props) -> nextState,
  callback
) -> void
