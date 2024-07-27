// Validacoes.js

// Validação do nome (apenas letras)
export function validarNome(nome) {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(nome);
}

// Validação do telefone (apenas números e com máscara)
export function validarTelefone(telefone) {
    const regex = /^\(\d{2}\) \d{1} \d{4} - \d{4}$/;
    return regex.test(telefone);
}

// Aplicar máscara ao telefone
export function aplicarMascaraTelefone(telefone) {
    telefone = telefone.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (telefone.length > 2) {
        telefone = telefone.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca parênteses nos dois primeiros dígitos
    }
    if (telefone.length > 8) {
        telefone = telefone.replace(/(\d{1})(\d{4})(\d)/, "$1 $2 - $3"); // Formata o restante
    }

    return telefone;
}

// Validação da data de nascimento (idade entre 12 e 100 anos)
export function validarDataNascimento(dataNascimento) {
    const hoje = new Date();
    const dataNasc = new Date(dataNascimento);
    const idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }

    return idade >= 12 && idade <= 100;
}
