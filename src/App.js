/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View } from 'react-native';

import { Topo, Resultado, Painel } from './components';


export default props => (
    <View>
        <Topo />
        <Resultado />
        <Painel />
    </View>
);
