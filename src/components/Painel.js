import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

class Painel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num1: '10',
            num2: '25',
            operacao: 'soma'
        };

        this.calcular = this.calcular.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);
        this.atualizaOperacao = this.atualizaOperacao.bind(this);
    }

    calcular() {
        const { num1, num2 } = this.state;
        const resultado = parseFloat(num1) + parseFloat(num2);
        // alert(`Sim vamos calcular ${resultado}`);
    }

    atualizaValor(nomeDoCampo, valor) {
        const obj = {};
        obj[nomeDoCampo] = valor;

        this.setState(obj);
    }

    atualizaOperacao(operacao){
        this.setState({operacao});
    }

    render() {
        return (
            <View>
                <Entrada
                    num1={this.state.num1}
                    num2={this.state.num2}
                    atualizaValor={this.atualizaValor}
                />
                <Operacao
                    operacao={this.state.operacao}
                    atualizaOperacao={this.atualizaOperacao}
                />

                <Comando acao={this.calcular} />
            </View>
        );
    }
}

export { Painel };
