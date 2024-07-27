import Usuario from './Usuario.js';

export default class FabricaUsuario {
    static criarUsuario(nome, dataNascimento, telefone, email) {
        return new Usuario(nome, dataNascimento, telefone, email);
    }
}
