import React, { useState, useEffect } from "react";
import "./styles.css";
import Card from "../IU/Card";
import blogPost from "../../Data/blog";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTelegram,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  const openFacebook = <FaFacebookF />;
  const openTelegram = <FaTelegram />;
  const openTwitter = <FaTwitter />;
  const openInstagram = <FaInstagram />;

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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0kpgrrlidVZDo8nhVKvWuO3LEuCw673Gkt3qfFc0qxNdZHwd1&usqp=CAU"
            alt=""
          />
        </div>
        <div className="cardBody">
          <p className="personalBio">
            My name is Sorangel Contreras I am a software developer
            specialization in Front end developement....:)
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
        <div className="networking-icons">
          <a
            className="facebookIcon"
            href={
              "https://www.facebook.com/?stype=lo&jlou=AffUBZPZKOm7kOvDc_7kg9mwKWNMgH-jElJTOnnD1JeCcgcWp6wsfFWo5zJX6Rvc86pF3z1NStzsaw-sBY1POOdkY8gjJolTuGce97FrvavHxw&smuh=64868&lh=Ac_1wtTehlL3XK5V"
            }
            target="_blank"
          >
            <FaFacebookF className="icon" icon={openFacebook} />
          </a>
          <a
            className="instagramIcon"
            href={
              "https://www.instagram.com/?hl=es-la"
            }
            target="_blank"
          >
            <FaInstagram className="icon" icon={openInstagram} />
          </a>
          <a
            className="twitterIcon"
            href={
              "https://twitter.com/login/error?username_or_email=sorange12023372&redirect_after_login=%2F"
            }
            target="_blank"
          >
            <FaTwitter className="icon" icon={openTwitter} />
          </a>
          <a
            className="telegramIcon"
            href={
              "https://web.telegram.org/#/im"
            }
            target="_blank"
          >
            <FaTelegram className="icon" icon={openTelegram} />
          </a>
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
              <NavLink key={post.id} to={`/post/${post.memories}`}>
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
