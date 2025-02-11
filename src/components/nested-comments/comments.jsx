function Comment({ comment, key }) {
  return <li key={key}>{comment.title}</li>;
}

export default Comment;
