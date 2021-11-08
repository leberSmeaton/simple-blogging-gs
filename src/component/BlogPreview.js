import React from 'react'
import Moment from 'react-moment'
import { Card } from '../styled-components'
import { capitalize, trunctcate } from '../utils/stringUtils'

export const BlogPreview = (props) => {
  const {post} = props
  return (
    <Card>
      <h3>{post.title}</h3>
      <h4>{capitalize(post.category)}</h4>
      <Moment fromNow>{post.updated_at}</Moment>
      <p>{trunctcate(post.content, 100)}</p>
    </Card>
  )
}
