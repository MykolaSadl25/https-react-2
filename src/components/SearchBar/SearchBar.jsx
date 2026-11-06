import { Component } from "react";
import style from "./SearchBar.module.css"
class SearchBar extends Component {
    state={
        searchValue:"",
    }

    handleFormSubmit = (evt)=>{
        evt.preventDefault()
        this.props.onSubmit(this.state.searchValue)
        
        this.setState({
            searchValue:""
        })
    }
  render() {
    return (
      <>
        <header className={style.searchbar}>
          <form onSubmit={this.handleFormSubmit} className={style.form}>
            <button type="submit" className={style.button}>
              <span>Search</span>
            </button>

            <input
              className={style.input}
              type="text"
              autoComplete="off"
              autoFocus
              onChange={(evt)=>this.setState({searchValue:evt.target.value})}
              value={this.state.searchValue}
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

export default SearchBar;