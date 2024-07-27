import FabricaUsuario from './FabricaUsuario.js';


//============================[Parte das funções de Operação]==================================

// Função para obter usuários do Local Storage
function obterUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}

// Função para salvar usuários no Local Storage
function salvarUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Função para adicionar um novo usuário
function adicionarUsuario(usuario) {
    const usuarios = obterUsuarios();
    usuarios.push(usuario);
    salvarUsuarios(usuarios);
    renderizarTabelaUsuarios();
    alert('Usuário cadastrado com sucesso!');
}

// Função para deletar um usuário
window.deletarUsuario = function(index) {
    const confirmacao = confirm("Você realmente deseja deletar este item?");
    if (confirmacao) {
        let usuarios = obterUsuarios();
        usuarios.splice(index, 1);
        salvarUsuarios(usuarios);
        renderizarTabelaUsuarios();
        alert('Usuário deletado com sucesso!'); 
    }
}

// Função para editar um usuário
window.editarUsuario = function(index) {
    window.location.href = `atualizar.html?index=${index}`;
}

// Função para atualizar um usuário
function atualizarUsuario(index, usuarioAtualizado) {
    let usuarios = obterUsuarios();
    usuarios[index] = usuarioAtualizado;
    salvarUsuarios(usuarios);
    alert('Usuário atualizado com sucesso!');
    window.location.href = 'index.html'; 
}

// Função para renderizar a tabela de usuários
function renderizarTabelaUsuarios() {
    const corpoTabelaUsuarios = document.querySelector('#tabelaUsuarios tbody');
    corpoTabelaUsuarios.innerHTML = '';
    const usuarios = obterUsuarios();

    usuarios.forEach((usuario, index) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td>${usuario.telefone}</td>
            <td>${usuario.dataNascimento}</td>
            <td>
                <button onclick="editarUsuario(${index})">Editar</button>
                <button onclick="deletarUsuario(${index})">Deletar</button>
            </td>
        `;
        corpoTabelaUsuarios.appendChild(linha);
    });
}

//==============================[Manipulação dos Formularios]==================================

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
