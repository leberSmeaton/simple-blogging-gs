import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createNewPost, getBlogPosts } from './services/blogPostServices';
import { GlobalStyle } from './styled-components/globalStyles';
import { BlogPost } from './component/BlogPost';
import BlogPosts from './component/BlogPosts';
import { NewBlogPost } from './component/NewBlogPost';
import NavBar from './component/NavBar';

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
    setLoading(true)
      createNewPost(postObject)
        .then(newPost => setBlogPosts([...blogPosts, newPost]))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
  }

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<BlogPosts loading={loading} posts={blogPosts} />} />
          <Route path="/posts/new" element={<NewBlogPost addNewBlogPost={addNewBlogPost} />} />
          <Route path="/posts/:id" element={<BlogPost blogPosts={blogPosts} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
