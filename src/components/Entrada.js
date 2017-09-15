import React from 'react';
import { View, StyleSheet } from 'react-native';

import Numero from './Numero';

export default props => (
    <View style={styles.numeros}>
        <Numero nome='num1' num={props.num1} atualizaValor={props.atualizaValor} />
        <Numero nome='num2' num={props.num2} atualizaValor={props.atualizaValor} />
    </View>
);

const styles = StyleSheet.create({
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
