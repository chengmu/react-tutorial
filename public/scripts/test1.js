var CommentBox = React.createClass({
    render : function () {
      return  (
        <div class='commentBox'>
          "Hello, world! I am a CommentBox."
        </div>
      )
    }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);

// 组件名第一个单词大写
