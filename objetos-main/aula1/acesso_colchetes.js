const objectpessoal = {
    nome: "Leonardo",
    idade: 17,
    cpf: "25456847923",
    email: "leonardo.souza@gmail.com",
};


console.log(
    `O nome do cliente é ${objectpessoal["nome"]} e essa pessoa tem ${objectpessoal}["idade"]} anos.`)
    
const chaves = ["nome", "idade", "cpf", "email"];


chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${objectpessoal[chave]}`);
    });