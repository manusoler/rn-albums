import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => {
        this.setState({ albums: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { albums } = this.state;
    let albumsContent = null;
    if (albums && albums.length) {
      albumsContent = albums.map(album => (
        <AlbumDetail key={album.title} album={album} />
      ));
    }
    return <View>{albumsContent}</View>;
  }
}

export default AlbumList;
