import React from 'react';
import films from '../Helpers/filmsData'
import { View, TextInput, Text, Button, StyleSheet, FlatList } from 'react-native';

export default class Search {
    render(){
        return(
            <View>
                <TextInput style={styles.textinput} placeholder='Titre du film'/>
                <Button title='Rechercher' onPress={() => {}}/>
                <FlatList
                    data={films}
                    renderItem={({ item }) => <Text title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
  });