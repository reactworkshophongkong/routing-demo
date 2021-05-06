import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

import { Post } from "./Post";
import { apiService } from './service'

export const Posts = () => {
  let match = useRouteMatch();
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await apiService.getPosts()
        setPosts(result)
      } catch (error) {
        console.log(error)
      }
    }

    fetchPosts()
  }, [])

  const postItems = posts.map(post => 
    <div key={post.id}>
      <Link key={post.id} to={`${match.path}/${post.id}`}>{post.title}</Link>
    </div>
  )

  return (
    <div>
      <h1>Posts page</h1>
      {postItems}
      <Switch>
        <Route path={`${match.path}/:id`}>
          <Post />
        </Route>
      </Switch>
    </div>
  );
};
