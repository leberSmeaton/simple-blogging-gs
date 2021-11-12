import React, { useState, useEffect, useReducer } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createNewPost, getBlogPosts } from './services/blogPostServices';
import { GlobalStyle } from './styled-components/globalStyles';
import { BlogPost } from './component/BlogPost';
import BlogPosts from './component/BlogPosts';
import { NewBlogPost } from './component/NewBlogPost';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import stateReducer from './config/stateReducer';
import initialState from './config/initialState';
import { StateContext } from './config/store';


const App = () => {
  const [ store, dispatch ] = useReducer(stateReducer, initialState);
  
  /* 
  // We might choose to use a loading state globally but we'll do it in combination of local and global states.

  const [ loading, setLoading ] = useState(true); 
  
  const {blogPosts} = store;

  useEffect(() => {
    getBlogPosts()
      .then(posts => {
        console.log(posts)
        dispatch({type: "setBlogPosts", data: posts})}
      )
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  },[])

  function addNewBlogPost(postObject){
    setLoading(true)
      createNewPost(postObject)
        .then(newPost => dispatch({type: "setBlogPosts", data: [...blogPosts, newPost]}))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
  }
  */ 


  
  return (
    <>
      <GlobalStyle />
      <StateContext.Provider value={{ store, dispatch }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/posts" />} />
            <Route path="/posts" element={<BlogPosts />} />
            <Route path="/posts/new" element={<NewBlogPost />} />
            <Route path="/posts/:id" element={<BlogPost />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </StateContext.Provider>
    </>
  )
}

export default App;
