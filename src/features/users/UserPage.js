import React from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectUserById } from '../users/usersSlice';
import { selectAllPosts } from '../posts/postsSlice';

// const selectPostsForUser = createSelector(
//   selectAllPosts,
//   (state, userId) => userId,
//   (allPosts, userId) => allPosts.filter((post) => post.user === userId)
// )

export const UserPage = ({ match }) => {
  const { userId } = match.params;

  const user = useSelector((state) => selectUserById(state, userId));

  // const postsForUser = useSelector((state) => selectPostsForUser(state, userId))
  const postsForUser = useSelector(state => {
    const allPosts = selectAllPosts(state)
    return allPosts.filter(post => post.user === userId)
  })

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));
  console.log('first')
  return (
    <section>
      <h2>{user.name}</h2>
      <ul>{postTitles}</ul>
    </section>
  );
};
