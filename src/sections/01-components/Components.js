import React from "react";
import faker from "faker";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";
import Header from "../common-components/Header";
import Wrapper from "../common-components/Wrapper";

const randomAuthor = () => faker.name.findName();
const randomDate = () => faker.date.recent().toISOString();
const randomCommentContent = () => faker.lorem.sentence();
const randomAvatar = () => faker.image.avatar();

const Components = () => {
  return (
    <Wrapper>
      <Header name={"Components"}/>
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
    </Wrapper>
  );
}

export default Components;