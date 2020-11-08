import React from "react";
import faker from "faker";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";
import './Components.css';

const randomAuthor = () => faker.name.findName();
const randomDate = () => faker.date.recent().toISOString();
const randomCommentContent = () => faker.lorem.sentence();
const randomAvatar = () => faker.image.avatar();

const Components = () => {
  return (
    <div className={'component'}>
      <div> This is <b>Components</b> component</div>
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            author={randomAuthor()}
            date={randomDate()}
            commentContent={randomCommentContent()}
            avatar={randomAvatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author={randomAuthor()}
            date={randomDate()}
            commentContent={randomCommentContent()}
            avatar={randomAvatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          Are you sure?
        </ApprovalCard>
      </div>
    </div>
  );
}

export default Components;