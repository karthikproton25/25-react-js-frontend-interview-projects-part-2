import { useState } from "react";
function NestedComments() {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      title: "This is first comment",
      children: [
        {
          id: 2,
          title: "This is child comment one",
          children: [],
        },
        {
          id: 3,
          title: "This is child comment two",
          children: [],
        },
        {
          id: 4,
          title: "This is child comment three",
          children: [],
        },
      ],
    },
  ]);

  function handleAddReply(getCurrentParentID, getCurrentReply) {
    console.log(getCurrentReply, getCurrentParentID);

    let updatedComments = [...comments];
    handleAddNewComment(updatedComments, getCurrentParentID, getCurrentReply);
    setComments(updatedComments);
  }

  function handleAddNewComment(
    updatedComments,
    getCurrentParentID,
    getCurrentReply
  ) {
    for (let i = 0; i < updatedComments.length; i++) {
      let comment = updatedComments[i];
      if (comment.id === getCurrentParentID) {
        comment.children.unshift(newComment(getCurrentReply));
      }
    }
  }

  return (
    <div className="nested-comments-container">
      <h1>Nested Comments</h1>
      <div className="comment-wrapper">
        <textarea
          onChange={(event) => setInputValue(event.target.value)}
          rows={"5"}
          cols={"100"}
          value={inputValue}
        />
        <br />
        <button>Add Comment</button>
      </div>
      <ul>
        {comments.map((comment) => (
          <Comment
            handleAddReply={handleAddReply}
            key={comment.id}
            comment={comment}
          />
        ))}
      </ul>
    </div>
  );
}

export default NestedComments;
