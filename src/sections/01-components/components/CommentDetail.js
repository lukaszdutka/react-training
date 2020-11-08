import React from "react";

const CommentDetail = ({author, date, commentContent, avatar}) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar}/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
            <span className="date">
              {date}
            </span>
        </div>
        <div className="text">
          {commentContent}
        </div>
      </div>
    </div>
  );
}
export default CommentDetail;