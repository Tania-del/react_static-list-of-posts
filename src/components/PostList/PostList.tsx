import React from 'react';
import { PostWithUserAndComments } from '../../types/Post';
import './PostList.scss';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: PostWithUserAndComments[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map((post) => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
