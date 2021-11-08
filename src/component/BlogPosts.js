import React from 'react'
import { BlogPost } from './BlogPost'

const BlogPosts = (props) => {
  const {loading, posts} = props;
  return (
    <>
      {
        loading
        ?
        (<p>Loading</p>)
        :
        (<div>
          {/* {posts.map(post => (<BlogPost key={post.id} post={post} />))} */}
          {posts.sort((a,b) => b.updated_at - a.updated_at).map(post => (<BlogPost key={post.id} post={post} />))}
        </div>)
      }
    </>
  )
}

export default BlogPosts;
