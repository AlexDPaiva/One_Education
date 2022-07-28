class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente01 = new Cliente();
const cliente02 = new Cliente();

cliente01.nome = "Alex";
cliente01.cpf = 32322290807;
cliente01.agencia = 1001;
cliente01.saldo = 0.0;

cliente02.nome = "Jennifer";
cliente02.cpf = 09099933309;
cliente02.agencia = 1001;
cliente02.saldo = 0.0;



console.log(cliente01)