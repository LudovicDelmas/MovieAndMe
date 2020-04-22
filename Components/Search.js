import React from 'react';
import films from '../Helpers/filmsData';
import FilmItem from './filmItem';
import { getFilmsFromApiWithSearchedText } from '../API/tmdbApi';
import { View, TextInput, Text, Button, StyleSheet, FlatList } from 'react-native';

export default class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.state = { 
            films: []
        }
    }



    _loadFilms() {
        console.log(this.searchedText) // Un log pour vérifier qu'on a bien le texte du TextInput
        if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
          getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
              this.setState({ films: data.results })
          })
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }
    


    render() {
        console.log("RENDER")
        return(
            <View style={styles.main_container}>
                <TextInput 
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText= {(text) => this._searchTextInputChanged(text)}
                />
                <Button title='Rechercher' onPress={() => this._loadFilms()}/>
                <FlatList
                    data={this.state.films}
                    renderItem={({ item }) => <FilmItem film={item}/>}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create ({
    main_container: {
        flex: 1,
        marginTop: 30
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