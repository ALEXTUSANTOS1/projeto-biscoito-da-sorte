import React, { Component } from "react";
import './estilo.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: ''
      }
    this.quebrar = this.quebrar.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];
  }

  quebrar(){
    let state = this.state;
    //mostra as frases de forma aleatória
    let numero = Math.floor(Math.random() * this.frases.length);
    // retorna a frase de acordo com o calculo aleatório da matriz frases
    state.texto = this.frases[numero];
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require('./components/assets/biscoito.png')} className="img"></img>
        <Botao name="Abrir Biscoito" acaoBtn={this.quebrar}/>
        <h3 className="textoFrase">{this.state.texto}</h3>
      </div>
    );
  }
}


class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.name}</button>
      </div>
    );
  }
}

export default App;