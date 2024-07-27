// OperacoesUsuario.js
import FabricaUsuario from './FabricaUsuario.js';

// Função para obter usuários do Local Storage
export function obterUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}

// Função para salvar usuários no Local Storage
export function salvarUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Função para adicionar um novo usuário
export function adicionarUsuario(usuario) {
    const usuarios = obterUsuarios();
    usuarios.push(usuario);
    salvarUsuarios(usuarios);
    renderizarTabelaUsuarios();
    alert('Usuário cadastrado com sucesso!');
}

// Função para deletar um usuário
export function deletarUsuario(index) {
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
export function editarUsuario(index) {
    window.location.href = `atualizar.html?index=${index}`;
}

// Função para atualizar um usuário
export function atualizarUsuario(index, usuarioAtualizado) {
    let usuarios = obterUsuarios();
    usuarios[index] = usuarioAtualizado;
    salvarUsuarios(usuarios);
    alert('Usuário atualizado com sucesso!');
    window.location.href = 'index.html'; 
}

// Função para renderizar a tabela de usuários
export function renderizarTabelaUsuarios() {
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
