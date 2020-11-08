import React from "react";
import faker from "faker";
import CommentDetail from "./components/CommentDetail";

const randomAuthor = () => faker.name.findName();
const randomDate = () => faker.date.recent().toISOString();
const randomCommentContent = () => faker.lorem.sentence();
const randomAvatar = () => faker.image.avatar();

const Components = () => {
  return (
    <div>
      <div> This is <b>Components</b> component</div>
      <div className="ui container comments">

        <CommentDetail
          author={randomAuthor()}
          date={randomDate()}
          commentContent={randomCommentContent()}
          avatar={randomAvatar()}
        />
        <CommentDetail
          author={randomAuthor()}
          date={randomDate()}
          commentContent={randomCommentContent()}
          avatar={randomAvatar()}
        />
        <CommentDetail
          author={randomAuthor()}
          date={randomDate()}
          commentContent={randomCommentContent()}
          avatar={randomAvatar()}
        />
      </div>
    </div>
  );
}

export default Components;