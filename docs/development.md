# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------| 
|RF-01|  Permitir cadastro do usuário | Luiz Felipe Costa | [cadastro.html](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/main/src/cadastro.html) |
|RF-02|  Permitir login do usuário    | Luiz Felipe Costa | [login.html](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/main/src/login.html) |
|RF-03|  Permitir o usuário recuperar a senha | Luiz Felipe ALves | [recuperar.html](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/main/src/recuperar.html) | 
|RF-04|  Gerar um gráfico de pizza: Comparativo cartão de crédito vs. débito nas despesas  |Felipe Jardim  |[Dashboard HTML](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/c01862698fb31de45d2325039bebe215a1d70e9a/src/dashboard.html)
|RF-05|  Gerar um gráfico de linhas: Evolução de receitas e despesas ao longo dos dias, semanas, meses |Felipe Jardim  |[Dashboard HTML](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/c01862698fb31de45d2325039bebe215a1d70e9a/src/dashboard.html)|  
|RF-06|  Permitir que o usuário edite as categorias. | |
|RF-07|  Permitir o registro de todas as fontes de receita (salário, freelancers, investimentos, etc.) |  |
|RF-08|  Permitir o registro de despesas com a descrição de data, valor, categoria, método de pagamento, histórico.       |Nicole Silva|[Despesas HTML](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/main/src/Despesas.html)
|RF-09|  Apresentar um dashboard com informações importantes para análise da conta de forma fácil e rápida      |Felipe Jardim  |[Dashboard HTML](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/c01862698fb31de45d2325039bebe215a1d70e9a/src/dashboard.html)
|RF-10|  Permitir que o usuário registre todas as transações realizadas durante o período do mês.      |Luiza Trevenzoli |[Transacoes HTML](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/main/src/transactions.html)


## Descrição das estruturas:

## Notícia
|
**Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

