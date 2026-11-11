"use strict";

class Aluno {
  #nome;
  #nota1;
  #nota2;
  #nota3;
  estado;
  media;
  constructor(nome, nota1, nota2, nota3) {
    this.#nome = nome;
    this.#nota1 = nota1;
    this.#nota2 = nota2;
    this.#nota3 = nota3;
  }
  // Calcula Média e armazena na variável 
  gerarMedia(nota1, nota2, nota3) {
    this.media = (nota1 + nota2 + nota3) / 3;
    return this.media;
  }
  gerarEstado(media) {
    let est;
    if (media >= 6) {
      est = 'Aprovado';
    } else if (media >= 3) {
      est = 'Recuperação';
    } else {
      est = 'Reprovado';
    }
    this.estado = est;
    return est;
  }
  getNome() {
    return this.#nome;
  }
  setNome(nome) {
    this.#nome = nome;
  }
  // Pegar a nota"n" e retorna seu valor.
  getNota(n) {
    switch(n) {
      case 1:
        return this.#nota1;
        break;
      case 2:
        return this.#nota2;
        break;
      case 3:
        return this.#nota3;
        break;
      default:
        return -1;
    }
  }
  // Altera a nota"n" => n = 2 => nota2 = valor
  setNota(n,valor) {
    switch(n) {
      case 1:
        return this.#nota1 = valor;
        break;
      case 2:
        return this.#nota2 = valor;
        break;
      case 3:
        return this.#nota3 = valor;
        break;
      default:
        return -1;
    }
  }

}

//fim da classe


