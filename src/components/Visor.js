import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
    <View>
        <TextInput
            placeholder='Resultado'
            editable={false}
            style={styles.visor}
        />
    </View>
);

const styles = StyleSheet.create({
    visor: {
        height: 100,
        fontSize: 30
    }
});
