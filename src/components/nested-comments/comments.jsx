function Comment({ comment, key }) {
  const [reply, setReply] = useState("");
  const [showReplyCommentBox, setShowReplyCommentBox] = useState(false);
  return <li key={key}>{comment.title}</li>;
}

export default Comment;
