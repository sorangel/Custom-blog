import React from 'react';
import "./styles.css";
import Card from "../../Componentes/IU/Card";
import RecentPosts from './RecentPosts';
import Layout from "../../Componentes/Layout";
import ImageGallery from "./ImageGallery";
import blogData from "../../Data/blog";



const Home  = (props) => {
    const galleryHeight = 450;
    const galleryStyle = {
        height: galleryHeight+'px',
        overflow: 'hidden'
    };

    const sideImageHeight = galleryHeight / 3;
  // const imgAr = blogData.data.map(post => post.blogImage);
    console.log(blogData);
    return (
        <div>
            <Card>
                <ImageGallery
                    largeWidth="70%"
                    smallWidth="30%"
                    sideImageHeight={sideImageHeight}
                    galleryStyle={galleryStyle}
                   // imageArray={ImgAr}
                />
            </Card>
            <Layout>
                <RecentPosts style={{width: '70%'}}/>
            </Layout>

        </div>
    );
};

export default Home;