import { Component } from "react";
import style from "./ImageGalleyItem.module.css"
class ImageGalleyItem extends Component {

  handleImageClick = (largeImage)=>{
    this.props.onClick(largeImage)
  }
  render() {
    const {largeImage, imageSRC, imageALT } = this.props;
    return (
      <li>
        <img onClick={()=>this.handleImageClick(largeImage)} className={style.img} src={imageSRC} alt={imageALT} />
      </li>
    );
  }
}

export default ImageGalleyItem;