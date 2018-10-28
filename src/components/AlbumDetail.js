import React from 'react';
import { Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = props => {
  const { album } = props;
  return (
    <Card>
      <CardSection>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: album.thumbnail_image }}
        />
        <Text>{album.title}</Text>
        <Text>{album.artist}</Text>
      </CardSection>
      <CardSection>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: album.image }}
        />
      </CardSection>
      <CardSection>
        <Text>{album.url}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
