import React, { Component } from 'react';
import './styles.css';

export default class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dolar: '',

            moedinhas: {
                quarter: '',
                dime: '',
                nickel: '',
                penny: '',
            },
            cents: '',
        };
    }

    setValor(event) {  //usada para salvar o valor no state
        const value = event.target.value;
        if (value < 0)   // tratamento para caso o usuario digite um valor menor que 0
            alert('Valor incorreto');
        this.setState({ dolar: value });


    }

    convert(dolar) {   //funcao utilizada para converter os valores com .
        dolar = (dolar + '').replace(/[^\d.-]/g, '');
        if (dolar && dolar.includes('.')) {
            dolar = dolar.substring(0, dolar.indexOf('.') + 3);
        }

        return dolar ? Math.round(parseFloat(dolar) * 100) : 0;
    }


    divideValor(valorConvert) {

      
        let vinteCinco = 0;
        let dez = 0;
        let cinco = 0;
        let um = 0;

        while (valorConvert > 0) { //continuar enquanto o valor nao for 0
            if (valorConvert >= 25) {   //dentro de cada if, se o valor convert for menor que o valor estabelecido
                //pois nao tem o minimo daquela moeda               
                valorConvert = valorConvert - 25;
                vinteCinco++;
              

            } else if (valorConvert >= 10) {
                valorConvert = valorConvert - 10;
                dez++;
              
            } else if (valorConvert >= 5) {
                valorConvert = valorConvert - 5;
                cinco++;
            } else {
                valorConvert = valorConvert - 1;
                um++;
                
            }
        }
    
        this.setState({
            moedinhas: {
              quarter: vinteCinco,
              dime: dez,
              nickel: cinco,
              penny: um
            }

        })
        
        // this.state.moedinhas = moedas;
        // console.log(`Seu total de moedas são ${moedas.reduce((total,next) => {return total + next })}`);

        // console.log(`Você possui ${moedas[0]} quarter(s), ${moedas[1]} nickel(s), ${moedas[2]} dime(s) e ${moedas[3]} penny(s)  `)
    }
    chamaConvert() {
        const valorConvert = this.convert(this.state.dolar);   //funcao auxiliar 
        this.setState({ cents: valorConvert });
        this.divideValor(valorConvert);


    }
/*
    componentDidUpdate() {
        console.log(this.state);
    }

*/  
    render() {

        return (

            <div>
                <h1>Converter Dolar para Cents</h1>

                <div id="divlinda">
                    <input id="barra" type="number" placeholder="Digite o valor" onBlur={(event) => this.setValor(event)}></input>

                    <input id="barra-dois" type="button" value="Converter" onClick={() => this.chamaConvert()} ></input>

                    <div id="informacao">

                       {
                            this.state.cents && <p>
                                Com {this.state.dolar} dolares você possui {this.state.moedinhas.quarter} quarter(s), {this.state.moedinhas.dime} dime(s),
                    {this.state.moedinhas.nickel} nickel(s) e {this.state.moedinhas.penny} penny(s).
                    </p>
                        }
                    </div>
                </div>
            </div>

        )

    }
}

