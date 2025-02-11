function Comment({ comment, key }) {
  const [reply, setReply] = useState("");
  const [showReplyCommentBox, setShowReplyCommentBox] = useState(false);
  return (
    <li key={key}>
      <span>{comment.title}</span>
      {!showReplyCommentBox ? (
        <button onClick={() => setShowReplyCommentBox(true)}>Add Reply</button>
      ) : null}
    </li>
  );
}

export default Comment;
