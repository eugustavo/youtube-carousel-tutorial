import React from 'react';
import {View, Image, Text, StatusBar, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const App = () => {
  const carouselItems = [
    {
      title: 'Gato te encarando',
      image:
        'https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg',
    },
    {
      title: 'Gato me solta',
      image:
        'https://ichef.bbci.co.uk/news/1024/branded_portuguese/23FF/production/_99751290_6e7cdeeb-e88e-4209-b3e3-2131e5c39220.jpg',
    },
    {
      title: 'Gato de chapéu',
      image: 'https://blog.usenatureza.com/wp-content/uploads/2014/12/cat.jpg',
    },
    {
      title: 'Gato atleta',
      image:
        'https://www.petlove.com.br/dicas/wp-content/uploads/2020/02/grumpy-cat-petlove.png',
    },
  ];

  function renderItem({item}) {
    return (
      <View style={styles.carouselItemContainer}>
        <Text style={styles.carouselItemTitle}>{item.title}</Text>
        <Image
          style={styles.carouselItemImage}
          source={{uri: `${item.image}`}}
        />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        <Carousel
          layout={'tinder'}
          layoutCardOffset={10}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItemContainer: {
    backgroundColor: '#333',
    borderRadius: 4,
    height: 300,
    padding: 20,
    marginTop: 20,
  },
  carouselItemImage: {
    width: '100%',
    height: 200,
    borderRadius: 4,
  },
  carouselItemTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default App;
