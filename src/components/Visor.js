import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class Visor extends Component {
    render() {
        return (
            <View>
                <TextInput
                    placeholder='Resultado'
                    style={styles.visor}
                    editable={false}
                    value={this.props.resultado}
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
