
# CRUD - Sistema de Cadastro (JavaScript with LocalStorage)

## Descrição

Esta é uma aplicação JavaScript que implementa operações CRUD (Create, Read, Update, Delete) para gerenciar uma lista de usuários. A aplicação utiliza o padrão de projeto Factory e armazena os dados no LocalStorage do navegador. Ela permite cadastrar, atualizar, deletar e listar usuários, proporcionando uma interface simples e intuitiva para gerenciar os dados dos usuários.

## 1. Tecnologias Utilizadas

<img align="center" alt="Js" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  
  <img align="center" alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img align="center" alt="CSS" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white">

## 2. Funcionalidades

- **Cadastro de Usuários:** Permite adicionar novos usuários com nome, e-mail, telefone e data de nascimento.
- **Listagem de Usuários:** Exibe todos os usuários cadastrados em uma tabela.
- **Edição de Usuários:** Permite editar os dados de um usuário existente.
- **Exclusão de Usuários:** Permite excluir um usuário da lista.
- **Mensagens de Confirmação:** Exibe mensagens de sucesso após cadastrar, atualizar ou excluir um usuário.
- **Confirmação de Exclusão:** Exibe uma confirmação antes de excluir um usuário.


## 3. Estrutura do Projeto


A estrutura do projeto está organizada da seguinte forma:

- **src/**: Diretório principal que contém todos os arquivos do projeto.
  
  - **css/**: Diretório que contém o arquivo de estilo CSS.
    - `style.css`: Arquivo que define os estilos para as páginas HTML.
      
  - **js/**: Diretório que contém os arquivos JavaScript.
    - `Usuario.js`: Classe modelo usado como Interface.
    - `FabricaUsuario.js`: Implementação do padrão Factory para a criação de objetos `Usuario`.
    - `Controlador.js`: Controlador que gerencia as operações CRUD (Create, Read, Update, Delete) e manipulação do DOM.
  - **pages/**: Diretório que contém os arquivos HTML das páginas da aplicação.
    
    - `index.html`: Página principal que exibe a tabela de usuários e o formulário de cadastro.
    - `atualizar.html`: Página que permite a atualização dos dados de um usuário existente.


## 4. Como Usar ?

 **Clone o Repositório e abra o arquivo index.html no seu navegador de preferência**

1. **Cadastro de Usuários:**
   - Preencha o formulário de cadastro com o nome, e-mail, telefone e data de nascimento.
   - Clique no botão "Cadastrar" para adicionar o usuário à lista.

2. **Listagem de Usuários:**
   - Os usuários cadastrados são exibidos em uma tabela na página principal.

3. **Edição de Usuários:**
   - Clique no botão "Editar" ao lado do usuário que deseja editar.
   - Você será redirecionado para uma página de atualização onde os dados do usuário serão carregados automaticamente no formulário.
   - Faça as alterações necessárias e clique no botão "Atualizar" para salvar as mudanças.

4. **Exclusão de Usuários:**
   - Clique no botão "Deletar" ao lado do usuário que deseja excluir.
   - Uma confirmação será exibida. Confirme a exclusão para remover o usuário da lista.

## 5. Dificuldades no desenvolvimento

- Fazer o uso do LocalStorage como persistência de dasdos, pois, foi a primeira vez que fiz uso da mesma.
- Aplicar o padrão Factory Method na Lógica do sistema.
