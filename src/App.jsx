import { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import { fetchImages } from "./services/api";

class App extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
    searchValue:"",
    image:""
  };

  handleLargeImage = (img)=>{
    this.setState({
      image:img,
    })
  }

  handleSearchSubmit = (searchValue) => {
    this.setState({
      loading: true,
      page:1,
      searchValue:searchValue,
    });
    fetchImages(searchValue).then((images) => {
      this.setState({ images: images, loading: false });
    });
  };

  handleLoadMore = ()=>{
    this.setState(prev=>{
      return {
        page:prev.page+1,
        loading:true
      }
    })
    fetchImages(this.state.searchValue,this.state.page).then(images=>this.setState((prev)=>({images:[...prev.images,...images],loading:false,})))
  }
  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        {this.state.loading && <Loader />}
        <ImageGallery images={this.state.images} onClick={this.handleLargeImage}/>
        <Button onLoadMore={this.handleLoadMore}></Button>
        {this.state.image && <Modal onClick={this.handleLargeImage} largeImage={this.state.image}/>}
      </>
    );
  }
}

export default App;
