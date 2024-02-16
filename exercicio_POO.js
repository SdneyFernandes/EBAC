
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        
    }
}


class Cachorro extends Animal {
    emitirSom() {
        return "Au Au!";
    }
}

class Gato extends Animal {
    emitirSom() {
        return "Miau!";
    }
}

class Papagaio extends Animal {
    emitirSom() {
        return "tudo que você falar!";
    }
}

const animal1 = new Papagaio("Carolina", 5);
const animal2 = new Gato("Mixa", 3);
const animal3 = new Cachorro("Max", 2);

console.log(`${animal1.nome} tem ${animal1.idade} anos e repete ${animal1.emitirSom()}`);
console.log(`${animal2.nome} tem ${animal2.idade} anos e faz ${animal2.emitirSom()}`);
console.log(`${animal3.nome} tem ${animal3.idade} anos e faz ${animal3.emitirSom()}`);
