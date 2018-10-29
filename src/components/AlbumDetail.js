import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const onPress = url => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log(`Don't know how to open URI: ${url}`);
    }
  });
};

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.headerImageStyles}
          source={{ uri: album.thumbnail_image }}
        />
      </View>
      <View style={styles.headerContentStyles}>
        <Text style={styles.headerTextStyle}>{album.title}</Text>
        <Text>{album.artist}</Text>
      </View>
    </CardSection>
    <CardSection>
      <Image style={styles.albumImageStyles} source={{ uri: album.image }} />
    </CardSection>
    <CardSection>
      <Button onPress={onPress.bind(null, album.url)}>Buy now!</Button>
    </CardSection>
  </Card>
);

const styles = {
  headerContentStyles: {
    marginLeft: 5,
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  headerImageStyles: {
    width: 50,
    height: 50
  },
  albumImageStyles: {
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default AlbumDetail;
