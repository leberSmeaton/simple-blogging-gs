import React, { useState, useEffect } from 'react'
import { capitalize } from '../utils/stringUtils'
import Moment from 'react-moment'
import { getBlogPost } from '../services/blogPostServices'

export const BlogPost = (props) => {
  // const {post} = props
  const [post,setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getBlogPost()
    .then(post => setPost(post))
    .catch(error => console.log(error))
    .finally(setLoading(false))
  },[])
  
  if(!post){
    return(
      <p>Oops, couldn't find your post.</p>
    )
  }

  return (
    <>
      <h1>{post.title}</h1>
      {/* <h3>{post.category[0].toUpperCase() + post.category.substring(1)}</h3> */}
      <h3>{capitalize(post.category)}</h3>
      {/* <p>{post.updated_at.toLocaleString()}</p> */}
      <Moment fromNow>{post.updated_at}</Moment>
      <p>{post.content}</p>
    </>
  )
}
