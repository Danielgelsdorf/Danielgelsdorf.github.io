export class ServicoModel{
    #img;
    #nome;
    #descricao;
    #preco;

    constructor(img, nome, descricao, preco){
        this.#descricao=descricao;
        this.#img= i;
        this.#nome=nome;
        this.#preco=preco;
    }
    
    getNome(){
        return this.#nome;
    }

    getPreco(){
        return this.#preco
    }

    getDescricao(){
        return this.#descricao;
    }

    getImg(){
        return this.#img;
    }
}