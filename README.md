# Desafio de Projeto: Calculadora de Partidas Rankeadas

Este projeto foi desenvolvido como parte de um desafio de código da DIO. O objetivo é criar uma função que calcula o saldo de vitórias de um jogador e, com base nesse saldo, determina o seu nível ou rank.

## 🚀 Tecnologias Utilizadas

* **JavaScript:** Linguagem principal para toda a lógica da calculadora.

## 📝 Descrição do Projeto

O script principal contém uma função `calculatoraDeVitorias` que recebe como parâmetros a quantidade de vitórias e derrotas de um jogador. A partir desses valores, ela calcula o saldo (vitórias - derrotas) e utiliza uma estrutura de decisão (`switch`) para classificar o jogador em um dos seguintes níveis:

* **Ferro:** Saldo menor ou igual a 10
* **Bronze:** Saldo entre 11 e 20
* **Prata:** Saldo entre 21 e 50
* **Ouro:** Saldo entre 51 e 80
* **Diamante:** Saldo entre 81 e 90
* **Lendário:** Saldo entre 91 e 100
* **Imortal:** Saldo maior ou igual a 101

Ao final, o programa exibe uma mensagem informando o saldo de vitórias e o nível alcançado pelo herói.

## 🎯 Objetivo do Desafio

O foco deste desafio era praticar os seguintes conceitos fundamentais da programação:

* Criação e utilização de funções.
* Uso de parâmetros e retorno de valores.
* Aplicação de operadores matemáticos.
* Implementação de estruturas de decisão (`switch case`).
* Utilização de laços de repetição (`for`) para testar a função com múltiplos valores.
* Manipulação de strings e interpolação para exibir resultados.

## 🔧 Como Executar

1.  Clone este repositório para a sua máquina local.
2.  Navegue até a pasta do projeto.
3.  Para executar o script, utilize o Node.js no seu terminal:
    ```bash
    node src/index.js
    ```
4.  O resultado com o nível do herói será exibido no console.

## ✨ Melhorias Futuras

* [ ] Transformar o script em uma aplicação interativa no terminal, onde o usuário insere os valores de vitória e derrota.
* [ ] Adicionar uma interface gráfica simples com HTML, CSS e JavaScript para a calculadora.
* [ ] Criar testes unitários para garantir que a função retorna os níveis corretamente.

---
Feito por Talles Henrique 👋 [LinkedIn](https://www.linkedin.com/in/talles-henrique-35a48a240)
