import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import PropTypes from 'prop-types';
import ImageViewer from 'ImageViewer';
import GalleryImage from '../GalleryImage';
export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.openLightbox = (index) => {
      this.setState({
        index,
        shown: true,
      });
    };
    this.hideLightbox = () => {
      this.setState({
        index: 0,
        shown: false,
      });
    };
  }
  state = {
    index: 0,
    shown: false,
  };
  render() {
    const { images } = this.props;
    const imagesArray = [];
    images.map((image) => imagesArray.push(image.urls.full));
    const { index, shown } = this.state;
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {imagesArray.map((image, idx) =>
          <GalleryImage
            index={idx}
            key={idx}
            onPress={this.openLightbox}
            uri={image}
          />
        )}
        <ImageViewer
          shown={shown}
          imageUrls={imagesArray}
          onClose={this.hideLightbox.bind(this)}
          index={index}
        />
      </View>
    );
  }
}
Gallery.propTypes = {
  images: PropTypes.array,
};