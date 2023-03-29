import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';
import { PostList } from './components/PostList';

const postsWithUserAndComments = postsFromServer.map(
  (post) => {
    const foundUser = usersFromServer.find((user => user.id === post.userId));
    const foundComments = commentsFromServer.filter(
      (comment => comment.postId === post.id),
    );

    return {
      ...post,
      user: foundUser,
      comments: foundComments,
    };
  },
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsWithUserAndComments} />
  </section>
);
