import React, { useState, useEffect } from 'react'
import { createNewPost, getBlogPosts } from './services/blogPostServices';
import { GlobalStyle } from './styled-components/globalStyles';
import { 
  BrowserRouter, 
  Routes, 
  Route,
  Navigate
} from 'react-router-dom';
import BlogPosts from './component/BlogPosts';
import { BlogPost } from './component/BlogPost';
import { NewBlogPost } from './component/NewBlogPost';

const App = () => {
  const [ blogPosts, setBlogPosts ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  
  useEffect(() => {
    getBlogPosts()
      .then(posts => {
        console.log(posts)
        setBlogPosts(posts)}
        )
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  },[])

  function addNewBlogPost(postObject){
    createNewPost(postObject)
    .then(newPost => setBlogPosts([...blogPosts, newPost]))
    .catch(error => console.log(error))
  }

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/post" element={<BlogPosts loading={loading} posts={blogPosts} />} />
          <Route path="/posts/new" element={<NewBlogPost addNewBlogPost={addNewBlogPost} />} />
          <Route path="/posts/:id" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
