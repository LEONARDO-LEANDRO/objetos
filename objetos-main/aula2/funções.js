const cliente = {
    nome: 'Leonardo',
    idade: 18,
    email: 'leonardo@escola',
    telefone: ['(43) 999663630)", "(43) 999663630'],
    saldo: 200,
    efetuarPagamento: function (valorCompra){
        if(valorCompra > this.saldo){
            console.log("Saldo insuficiente!!")
        }else{
            this.saldo = this.saldo - valorCompra;
            console.log(`Pagamento realizado! Novo saldo: ${this.saldo}`)
         }
    }
};

cliente.endereços = [{
    rua:'R. Maria Inez Lourenço',
    numero: 3,
    apartamento: false,
    complemento: 'Do lado da APAE',

},
];

cliente.endereços.push({
    rua:'Centro',
    numero: 54,
    apartamento: '534',
    casa: false,
    complemento: 'Em frente a praça Liberatos',


})
cliente.efetuarPagamento(250);
