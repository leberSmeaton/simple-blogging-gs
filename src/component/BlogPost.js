import React, { useState, useEffect } from 'react'
import { capitalize } from '../utils/stringUtils'
import Moment from 'react-moment'
import { getBlogPost } from '../services/blogPostServices'
import { useParams } from 'react-router'

export const BlogPost = (props) => {
  // const {post} = props
  const [post,setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  const { id } = useParams()
  console.log(useParams());

  useEffect(() => {
    getBlogPost(id)
    .then(post => setPost(post))
    .catch(error => console.log(error))
    .finally(setLoading(false))
  },[])
  
  if(!post && loading){
    return(
      <p>Loading...</p>
    )
  }

  if(!post && !loading){
    return(
      <p>Oops, couldn't find your post.</p>
    )
  }

  return (
    <div>
      <>
        <h1>{post.title}</h1>
        <h3>{capitalize(post.category)}</h3>
        <Moment fromNow>{post.updated_at}</Moment>
        <p>{post.content}</p>
      </>
    </div>
  )
}
