class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo;

    sacar(valor){
      if(this._saldo >= valor){
        this._saldo-= valor;
        return  valor;
      }
    }
    depositar(valor){
      if (valor > 0){
        this._saldo += valor;
      }
    }
}


const cliente01 = new Cliente();
const cliente02 = new Cliente();

cliente01.nome = "Alex";
cliente01.cpf = 32322290807;

cliente02.nome = "Jennifer";
cliente02.cpf = 09099933309;

let contaAlex = new ContaCorrente();
contaAlex.saldo = 0;
contaAlex.agencia = 1001;

contaAlex.depositar(100.00)
contaAlex.sacar(50.00)


console.log(`Oi ${cliente01} seu saldo é de ${contaAlex.saldo} reais.`);