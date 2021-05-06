import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import { apiService } from './service'

export const Post = (props) => {
  let { id } = useParams();
  const [post, setPost] = useState({})

  console.log('props', props)
  console.log('id ' + id)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await apiService.getPost(id)
        setPost(result)
      } catch (error) {
        console.log(error)
      }
    }

    fetchPost()
  }, [id])

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  for (let param of params) {
    const [key, value] = param;
    console.log(key + ":" + value);
  }

  return (
    <div className="row">
      <h2>{post.title} by {post.author}</h2>
    </div>
  )
};
