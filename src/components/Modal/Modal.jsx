import { Component } from "react";
import style from "./Modal.module.css";

class Modal extends Component {
  componentDidMount(){
    window.addEventListener("keydown",this.handleCloseOnEsc)
  }
  componentWillUnmount(){
    window.removeEventListener("keydown",this.handleCloseOnEsc)

  }

  handleCloseOnEsc=(evt)=>{
    if (evt.code==="Escape") {
      this.props.onClose()
    }
  }

  handleBackDropClick= (evt)=>{
      if (evt.target===evt.currentTarget) {
        this.props.onClose()
      }
    }

  render() {

    const {largeImage, closeModal}=this.props;

    return (
      <div onClick={this.handleBackDropClick} className={style.backdrop}>
        <div className={style.modal}>
          <img
            className={style.img}
            src={largeImage}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Modal;