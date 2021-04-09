import React, { Component } from 'react';

import './style.css'

class ListaDeCategorias extends Component {

    constructor(){
        super();
        this.state = {
            categorias:[]
        };
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias.bind(this));
    }

    _novasCategorias(categorias) {
        this.setState({
            ...this.state,
            categorias
        })
    }

    _handleEventoInput(event) {
        if (event.key === 'Enter') {
            let valorCategoria = event.target.value
            valorCategoria = valorCategoria.charAt(0).toUpperCase() + valorCategoria.substr(1).toLowerCase();
            this.props.adicionarCategoria(valorCategoria)
            event.target.value = ''
        }
    }

    render() { 
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {
                        this.state.categorias.map((categoria, index) => {
                            return (
                                <li 
                                    key={index}
                                    className="lista-categorias_item"
                                >
                                        {categoria}
                                </li>
                            )
                        })
                    }
                </ul>

                <input 
                    type="text"
                    placeholder="Adicionar categoria"
                    className="lista-categorias_input"
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}
 
export default ListaDeCategorias;