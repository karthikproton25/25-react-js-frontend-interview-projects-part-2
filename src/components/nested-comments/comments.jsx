function Comment({ comment, key }) {
  const [reply, setReply] = useState("");
  const [showReplyCommentBox, setShowReplyCommentBox] = useState(false);
  return (
    <li key={key}>
      <span>{comment.title}</span>
      {!showReplyCommentBox ? <button>Add Reply</button> : null}
      {showReplyCommentBox ? (
        <div>
          <textarea
            rows={"2"}
            cols={"20"}
            onChange={(event) => setReply(event.target.value)}
            value={reply}
          />
          <br />
          <div className="reply-buttons-container">
            <button>Submit</button>
            <button>Cancel</button>
          </div>
        </div>
      ) : null}
    </li>
  );
}

export default Comment;
