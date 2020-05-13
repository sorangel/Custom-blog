import React, { useState, useEffect } from 'react';
import "./styles.css";
import Card from "../IU/Card";
import blogPost from "../../Data/blog.json";


const BlogPost = (props) => {

  const [post, setPost] = useState({
    id: "" ,
    blogCategory: "" ,
    blogTitle : "" ,
    postedOn: "" ,
    author: "" ,
    blogImage: "" ,
    blogText: ""
  });
  const [memories, setMemories] = useState('');


  useEffect(() => {
    const memories = props.match.params.memories;
    const _post = blogPost.data.find(post => post.memories === memories);
    debugger;
    setPost(_post);
    setMemories(memories)
  }, [post, props.match.params.memories]);

  if(post.blogImage === "") return null;

  return(
      <div className="blogPostContainer">
        <Card>
          <div className="blogHeader">
            <span className="blogCategory">{post.blogCategory}</span>
            <h1 className="postTitle">{post.blogTitle}</h1>
            <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
          </div>

          <div className="postImageContainer">
            <img src="" alt="Post Image" />

          </div>

          <div className="postContent">
            <h3>{post.blogTitle}</h3>
            <p>{post.blogText}</p>
          </div>

        </Card>
      </div>
  )

}

export default BlogPost;
