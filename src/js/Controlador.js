// Controlador.js
import { adicionarUsuario, deletarUsuario, editarUsuario, atualizarUsuario, renderizarTabelaUsuarios, obterUsuarios } from './OperacoesUsuario.js';
import FabricaUsuario from './FabricaUsuario.js';

// Manipulação do formulário de cadastro
const formUsuario = document.getElementById('formUsuario');
if (formUsuario) {
    formUsuario.addEventListener('submit', function (event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const dataNascimento = document.getElementById('dataNascimento').value;

        // Utilizando o Factory Method para criar um novo usuário
        const usuario = FabricaUsuario.criarUsuario(nome, dataNascimento, telefone, email);
        adicionarUsuario(usuario);

        // Limpa o formulário
        document.getElementById('formUsuario').reset();
    });
}

// Manipulação do formulário de atualização
const formAtualizarUsuario = document.getElementById('formAtualizarUsuario');
if (formAtualizarUsuario) {
    formAtualizarUsuario.addEventListener('submit', function (event) {
        event.preventDefault();
        const index = document.getElementById('index').value;
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const dataNascimento = document.getElementById('dataNascimento').value;

        // Utilizando o Factory Method para criar um usuário atualizado
        const usuarioAtualizado = FabricaUsuario.criarUsuario(nome, dataNascimento, telefone, email);
        atualizarUsuario(index, usuarioAtualizado);
    });

    // Função para preencher o formulário de atualização com os dados do usuário selecionado
    function preencherFormularioAtualizacao() {
        const urlParams = new URLSearchParams(window.location.search);
        const index = urlParams.get('index');

        if (index !== null) {
            const usuarios = obterUsuarios();
            const usuario = usuarios[index];

            document.getElementById('index').value = index;
            document.getElementById('nome').value = usuario.nome;
            document.getElementById('telefone').value = usuario.telefone;
            document.getElementById('email').value = usuario.email;
            document.getElementById('dataNascimento').value = usuario.dataNascimento;
        }
    }

    // Preencher o formulário ao carregar a página de atualização
    document.addEventListener('DOMContentLoaded', preencherFormularioAtualizacao);
}

// Renderizar a tabela de usuários ao carregar a página principal
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('#tabelaUsuarios')) {
        renderizarTabelaUsuarios();
    }
});

// Tornar as funções globais para uso nos botões
window.editarUsuario = editarUsuario;
window.deletarUsuario = deletarUsuario;
