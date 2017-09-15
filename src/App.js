/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';

import { Topo, Resultado, Painel } from './components';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num1: '',
            num2: '',
            operacao: 'soma',
            resultado: ''
        };

        this.calcular = this.calcular.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);
        this.atualizaOperacao = this.atualizaOperacao.bind(this);
    }

    calcular() {
        const { num1, num2 } = this.state;
        let { resultado } = this.state;
        // let resultado = 0;

        switch (this.state.operacao) {
            case 'soma':
                resultado = parseFloat(num1) + parseFloat(num2);
                break;
            case 'subtracao':
                resultado = parseFloat(num1) - parseFloat(num2);
                break;
            default:
                resultado = 0;
                break;
        }
        this.setState({resultado: String(resultado)});
    }

    atualizaValor(nomeDoCampo, valor) {
        const obj = {};
        obj[nomeDoCampo] = valor;

        this.setState(obj);
    }

    atualizaOperacao(operacao){
        console.log(this.state.operacao);
        this.setState({operacao});
    }

    render() {
        return (
            <View>
                <Topo />
                <Resultado
                    resultado={this.state.resultado}
                />
                <Painel
                    num1={this.state.num1}
                    num2={this.state.num2}
                    atualizaValor={this.atualizaValor}
                    operacao={this.state.operacao}
                    atualizaOperacao={this.atualizaOperacao}
                    acao={this.calcular}
                />
            </View>
        );
    }
}

export default App;
