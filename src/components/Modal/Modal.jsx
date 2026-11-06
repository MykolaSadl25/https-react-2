import { Component } from "react";
import style from "./Modal.module.css";

class Modal extends Component {
  render() {
    return (
      <div className={style.backdrop}>
        <div className={style.modal}>
          <img
            className={style.img}
            src={this.props.largeImage}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Modal;