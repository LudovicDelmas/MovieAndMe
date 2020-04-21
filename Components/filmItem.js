import React from 'react';
import { StyleSheet } from 'react-native';

export default class FilmItem {
    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_text}>Titre du film</Text>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    main_container: {
      height: 190
    },
    title_text: {
      
    }
});