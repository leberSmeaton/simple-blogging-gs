import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Block, Label, Input, InputButton, TextArea} from '../styled-components/index'

export const NewBlogPost = (props) => {
  const navigate = useNavigate();

  const initialState = {
    title: "",
    category: "",
    content: ""
  }

  const { addNewBlogPost } = props
  const [formState, setFormState] = useState(initialState);

  function handleChange(event){
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    addNewBlogPost(formState);
    navigate("/");
  }
  
  return (
    <div>
      <h1>Add a blog post</h1>
      <form id="newPostForm" onSubmit={handleSubmit}>
        <Block>
          <Label>Title</Label>
          <Input type="text" name="title" placeholder="enter title" value={formState.title} onChange={handleChange}></Input>
        </Block>
        <Block>
          <Label>Category</Label>
          <Input type="text" name="category" placeholder="enter category" value={formState.category} onChange={handleChange}></Input>
        </Block>
        <Block>
          <Label>Content</Label>
          <TextArea from="newPostForm" type="text" name="content" placeholder="enter text" value={formState.content} onChange={handleChange}></TextArea>
        </Block>
        <Block>
          <InputButton type="submit" value="Add Post" />
        </Block>
      </form>
    </div>
  )
}

export default NewBlogPost;