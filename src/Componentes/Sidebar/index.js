import React, { useState, useEffect } from "react";
import "./styles.css";
import Card from "../IU/Card";
import blogPost from "../../Data/blog";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan } from '@fortawesome/free-solid-svg-icons'


const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

    const openFacebook = <FontAwesomeIcon icon={"facebook-f"} />;
    const openInstagram = <FontAwesomeIcon icon={"faInstagram"} />;
    const openTelegram = <FontAwesomeIcon icon={"faTelegram"} />;
    const openTwitter = <FontAwesomeIcon icon={"faTwitter"} />;

  return (
    <div
      className="sidebarContainer"
      style={{
        width: props.width,
      }}
    >
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGAb43NxZswWRLw9RoxC8YwykXlLy_efq2r674Xj0ffRR3D-0P"
            alt=""
          />
        </div>
        <div className="cardBody">
          <p className="personalBio">
            My name is Rizwan Khan I am a software developer specialization in
            Front end developement....:)
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
        <div className="facebookIcon">
          <FontAwesomeIcon
            onClick={openFacebook}
            className="icon"
            icon={faFan}
          />
        </div>
        <div className="instagramIcon">
          <FontAwesomeIcon
            onClick={openInstagram}
            className="icon"
            icon={"faInstagram"}
          />
        </div>
        <div className="twitterIcon">
          <FontAwesomeIcon
            onClick={openTwitter}
            className="icon"
            icon={"faTwitter"}
          />
        </div>
        <div className="telegramIcon">
          <FontAwesomeIcon
            onClick={openTelegram}
            className="icon"
            icon={"faTelegram"}
          />
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">
          {posts.map((post) => {
            return (
              <NavLink key={post.id} to={`/post/${post.slug}`}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
