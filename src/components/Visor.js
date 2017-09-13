import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class Visor extends Component {

    constructor(props) {
        super(props);

        this.state = { resultado: '' };
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder='Resultado'
                    style={styles.visor}
                    value={this.state.resultado}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    visor: {
        height: 100,
        fontSize: 30
    }
});
