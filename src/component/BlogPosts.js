import React from 'react'
import { BlogPreview } from './BlogPreview'
import { CardDeck } from '../styled-components';

const BlogPosts = (props) => {
  const {loading, posts} = props;
  return (
    <>
      {
        loading
        ?
        (<p>Loading</p>)
        :
        (<CardDeck>
          {/* {posts.map(post => (<BlogPost key={post.id} post={post} />))} */}
          {posts.sort((a,b) => b.updated_at - a.updated_at).map(post => (<BlogPreview key={post.id} post={post} />))}
        </CardDeck>)
      }
    </>
  )
}

export default BlogPosts;
