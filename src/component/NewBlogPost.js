import React, { useState } from 'react'
import { Block, Label, Input, InputButton, TextArea} from '../styled-components/index'

export const NewBlogPost = (props) => {

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
    console.log(formState);
  }
  
  return (
    <div>
      <h1>Add a blog post</h1>
      <form id="newPostForm" onSubmit={handleSubmit}>
        <Block>
          <Label>Title</Label>
          <Input type="text" name="title" placeholder="enter title" value={formState.title}></Input>
        </Block>
        <Block>
          <Label>Category</Label>
          <Input type="text" name="category" placeholder="enter category" value={formState.category}></Input>
        </Block>
        <Block>
          <Label>Content</Label>
          <TextArea from="newPostForm" type="text" name="content" placeholder="enter text" value={formState.content}></TextArea>
        </Block>
        <Block>
          <InputButton type="submit" value="Add Post" onChange={handleChange}/>
        </Block>
      </form>
    </div>
  )
}
