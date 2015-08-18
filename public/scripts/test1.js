var CommentBox = React.createClass({
    render : function () {
      return  (
        React.createElement('div', {className: "commentBox"},
          "Hello, world! I am a CommentBox."
        )
      )
    }
});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);

// 组件名第一个单词大写
