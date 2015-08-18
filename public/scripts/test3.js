var CommentBox = React.createClass({
  render : function () {
    return (
      <div class='commentBox'>
        <CommentForm />
        <CommentList />
      </div>
    )
  }
})

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);