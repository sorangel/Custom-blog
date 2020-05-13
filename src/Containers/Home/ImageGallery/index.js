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
          src="https://i.pinimg.com/originals/98/22/46/982246bce374631b31de65d84a51dbf5.jpg"
          alt=""
        />
      </div>
    </section>

    <section className="sideImageWrapper" style={{ width: props.smallWidth }}>
      <SideImage
        height={props.sideImageHeight}
        src="https://thumbs.dreamstime.com/z/retrato-hermoso-dibujado-mano-de-la-mujer-manera-se%C3%B1ora-elegante-con-el-pelo-largo-muchacha-linda-en-gafas-sol-peinado-moda-108846334.jpg"
        alt=""
      />
      <SideImage
        height={props.sideImageHeight}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjf2T3m9AFFsSUeq8wH3jFWdZ5yDwpLaJggTAr6OVbVGgtJaTi&usqp=CAU"
        alt=""
      />
      <SideImage
        height={props.sideImageHeight}
        src="https://thumbs.dreamstime.com/z/mujer-joven-hermosa-dibujada-mano-en-gafas-de-sol-muchacha-linda-con-el-peinado-elegante-la-manera-104771247.jpg"
        alt=""
      />
    </section>
  </div>
);

export default ImageGallery;
