// Controlador.js
import { adicionarUsuario, deletarUsuario, editarUsuario, atualizarUsuario, renderizarTabelaUsuarios, obterUsuarios } from './OperacoesUsuario.js';
import FabricaUsuario from './FabricaUsuario.js';
import { validarNome, validarTelefone, aplicarMascaraTelefone, validarDataNascimento } from './Validacoes.js';

// Função para aplicar máscara ao campo de telefone
function configurarMascaraTelefone(campoTelefone) {
    campoTelefone.addEventListener('input', function (event) {
        event.target.value = aplicarMascaraTelefone(event.target.value);
    });
}

// Manipulação do formulário de cadastro
const formUsuario = document.getElementById('formUsuario');
if (formUsuario) {
    const campoTelefone = document.getElementById('telefone');
    configurarMascaraTelefone(campoTelefone);

    formUsuario.addEventListener('submit', function (event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const dataNascimento = document.getElementById('dataNascimento').value;

        // Validações
        if (!validarNome(nome)) {
            alert('O nome deve conter apenas letras.');
            return;
        }

        if (!validarTelefone(telefone)) {
            alert('O telefone deve estar no formato (xx) x xxxx - xxxx.');
            return;
        }

        if (!validarDataNascimento(dataNascimento)) {
            alert('A idade deve estar entre 12 e 100 anos.');
            return;
        }

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
    const campoTelefone = document.getElementById('telefone');
    configurarMascaraTelefone(campoTelefone);

    formAtualizarUsuario.addEventListener('submit', function (event) {
        event.preventDefault();
        const index = document.getElementById('index').value;
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const dataNascimento = document.getElementById('dataNascimento').value;

        // Validações
        if (!validarNome(nome)) {
            alert('O nome deve conter apenas letras.');
            return;
        }

        if (!validarTelefone(telefone)) {
            alert('O telefone deve estar no formato (xx) x xxxx - xxxx.');
            return;
        }

        if (!validarDataNascimento(dataNascimento)) {
            alert('A idade deve estar entre 12 e 100 anos.');
            return;
        }

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
            document.getElementById('telefone').value = aplicarMascaraTelefone(usuario.telefone);
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
