import React, { Component } from 'react';
import CardNota from '../CardNota';

import './style.css';

// Class Component
class ListaDeNotas extends Component {

    constructor() {
        super();
        this.state = {
            notas:[]
        };
    }

    componentDidMount() {
        this.props.notas.inscrever(this._novasNotas.bind(this));
    }

    componentWillUnmount() {
        this.props.notas.desinscrever(this._novasNotas.bind(this));
    }

    _novasNotas(notas) {
        this.setState({
            ...this.state,
            notas
        })
    }

    render(){
        return (
            <ul className="lista-notas">
                {
                    this.state.notas.map((nota, index) => {
                        return (
                            <li 
                                key={index} 
                                className="lista-notas_item"
                            >
                                <CardNota 
                                    categoria={nota.categoria}
                                    titulo={nota.titulo}
                                    texto={nota.texto}
                                    index={index}
                                    deletarNota={this.props.deletarNota}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        );
    };
};

export default ListaDeNotas;