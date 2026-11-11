import { Component } from "react";
import ImageGalleyItem from "../ImageGalleryItem/ImageGalleryItem";
import style from "./ImageGallery.module.css"
class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <>
        <ul className={style.list}>
          {images.map(({ id, webformatURL,largeImageURL, tags }) => {
            return (
            <ImageGalleyItem key={id} onClick={this.props.onClick} largeImage={largeImageURL} imageID={id} imageSRC={webformatURL} imageALT={tags}/>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ImageGallery;