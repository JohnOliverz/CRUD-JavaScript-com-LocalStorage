export default class Usuario {
    constructor(nome, dataNascimento, telefone, email) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.telefone = telefone;
        this.email = email;
    }

    // Métodos para obter as propriedades do usuário
    getNome() {
        return this.nome;
    }

    getTelefone() {
        return this.telefone;
    }

    getEmail() {
        return this.email;
    }

    getDataNasc() {
        return this.dataNascimento;
    }
}
