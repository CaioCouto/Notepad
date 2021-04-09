export default class Categorias {

    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }

    adicionarCategoria(nomeCategoria) {
        this.categorias.push(nomeCategoria);
        this.notificar()
	}

    inscrever(func) {
        this._inscritos.push(func);
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func); 
    }


    notificar() {
        this._inscritos.forEach(func => {
            func(this.categorias);
        });
    }
}