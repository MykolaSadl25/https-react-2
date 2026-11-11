import { Component } from "react";
import style from "./Button.module.css"
class Button extends Component{
    render(){
        const {onLoadMore}=this.props
        return(
            <button disabled={this.props.disabled} className={style.button} onClick={onLoadMore} type="button">Load More</button>
        )
    }
}

export default Button