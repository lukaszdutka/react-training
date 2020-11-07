import React from "react";


const CommentDetail = (authorName, date, commentContent, avatar) => {

  return (
    <div className="ui container comments">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar}/>
      </a>

      <div className="content">
        <a href="/" className="author">
          {authorName}
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
export default CommentDetail