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
      <CommentDetail
        author={randomAuthor()}
        date={randomDate()}
        commentContent={randomCommentContent()}
        avatar={randomAvatar()}
      />
    </div>
  );
}

export default Components;