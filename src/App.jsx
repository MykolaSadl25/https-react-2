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
    searchValue: "",
    image: "",
  };

  closeModal = () => {
    this.setState({
      image: "",
    });
  };

  handleLargeImage = (img) => {
    this.setState({
      image: img,
    });
  };

  handleSearchSubmit = (searchValue) => {
    this.setState({
      loading: true,
      page: 1,
      searchValue: searchValue,
    });
    fetchImages(searchValue).then((images) => {
      this.setState({ images: images, loading: false });
    });
  };

  handleLoadMore = () => {
    this.setState({ loading: true });

    fetchImages(this.state.searchValue, this.state.page + 1)
      .then((newImages) => {
        this.setState((prev) => {
          const uniqueImages = newImages.filter(
            (image) =>
              !prev.images.some((prevImage) => prevImage.id === image.id),
          );

          return {
            images: [...prev.images, ...uniqueImages],
            page: prev.page + 1,
            loading: false,
          };
        });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        {this.state.loading && <Loader />}
        <ImageGallery
          images={this.state.images}
          onClick={this.handleLargeImage}
        />
        {this.state.images.length > 0 && (
          <Button
            disabled={this.state.loading}
            onLoadMore={this.handleLoadMore}
          ></Button>
        )}
        {this.state.image && (
          <Modal
            onClose={this.closeModal}
            onClick={this.handleLargeImage}
            largeImage={this.state.image}
          />
        )}
      </>
    );
  }
}

export default App;
