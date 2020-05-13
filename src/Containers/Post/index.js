import React from 'react';
import "./styles.css";
import BlogPost from "../../Componentes/BlogPost"
import Layout from "../../Componentes/Layout";


const Post = (props) => {

    console.log(props);


    return(
        <Layout>
            <BlogPost {...props} />
        </Layout>
    )

};

export default Post;