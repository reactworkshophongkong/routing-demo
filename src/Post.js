import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { apiService } from './service'

export const Post = (props) => {
  let { id } = useParams();
  const [post, setPost] = useState({})


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

  return (
    <div className="row">
      <h2>{post.title} by {post.author}</h2>
    </div>
  )
};
