import React, { Component } from 'react';
import ArrayDeNotas from './dados/Notas'
import Categorias from './dados/Categorias'
import ListaDeNotas from './components/ListaDeNotas/';
import ListaDeCategorias from './components/ListaDeCategorias/';
import FormularioCadastroNota from './components/FormularioCadastroNota/';

import './assets/App.css'

class App extends Component {

	constructor() {
		super();
		this.categorias = new Categorias();
		this.notas = new ArrayDeNotas(); 
	}

	render() {
		return (
			<section className="conteudo">
				<FormularioCadastroNota 
					criarNota={this.notas.criarNota.bind(this.notas)}
					categorias={this.categorias}
				/>

				<main className="conteudo-principal">
					<ListaDeCategorias 
						categorias={this.categorias}
						adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
					/>
					
					<ListaDeNotas 
						notas={this.notas}
						deletarNota={this.notas.deletarNota.bind(this.notas)}
					/>
				</main>
			</section>
		);
	}
}

export default App;
