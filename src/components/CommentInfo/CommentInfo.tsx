import React from 'react';
import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>

        {' by '}

        <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
          {comment.email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {comment.body}
      </div>
    </div>
  );
};
