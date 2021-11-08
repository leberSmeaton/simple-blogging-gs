import React from 'react'
import { capitalize } from '../utils/stringUtils'
import Moment from 'react-moment'

export const BlogPost = (props) => {
  const {post} = props
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
