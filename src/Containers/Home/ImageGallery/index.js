import React from "react";
import "./styles.css";

const SideImage = (props) => {
  return (
    <div style={{ height: `${props.height}px` }}>
      <img src={props.src} alt="" />
    </div>
  );
};

const ImageGallery = (props) => (
  <div className="galleryPost" style={props.galleryStyle}>
    <section style={{ width: props.largeWidth }}>
      <div className="mainImageWrapper">
        <img
          className="images"
          src={"https://i.ytimg.com/vi/Ti_rKc6Nq-4/hqdefault.jpg"}
          alt=""
        />

      </div>
    </section>

  </div>
);
export default ImageGallery;
