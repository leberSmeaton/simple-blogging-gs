import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { Card } from '../styled-components'
import { capitalize, trunctcate } from '../utils/stringUtils'

export const BlogPreview = (props) => {
  const {post} = props;
  return (
    <Card>
      <Link to={`/posts/${post.id}`}><h3>{post.title}</h3></Link>
      <h4>{capitalize(post.category)}</h4>
      <Moment fromNow>{post.updated_at}</Moment>
      <p>{trunctcate(post.content, 100)}</p>
    </Card>
  )
}
