import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import data from './instagram-feed/data';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Text>Now we're talking, mister!</Text>
        <StatusBar style="auto" />
      </View>
      <FlatList
        data={data.articles}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              style={styles.image}
              source={item.image}
            />
            <Text>{item.likes}</Text>
            <Text>{item.comments}</Text>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  image: {
    width: '100%',
    height: 200,
  },
});