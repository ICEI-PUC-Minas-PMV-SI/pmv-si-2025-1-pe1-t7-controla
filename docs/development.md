# Programação de Funcionalidades

## Requisitos Atendidos

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------| 
|RF-01|  Permitir cadastro do usuário | Luiz Felipe Costa | [cadastro.html](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/main/src/cadastro.html) |
|RF-02|  Permitir login do usuário    | Luiz Felipe Costa | [login.html](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/main/src/login.html) |
|RF-03|  Permitir o usuário recuperar a senha | Luiz Felipe ALves | [recuperar.html](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/main/src/recuperar.html) | 
|RF-04|  Gerar um gráfico de pizza: Comparativo cartão de crédito vs. débito nas despesas  |Felipe Jardim  |[Dashboard HTML](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/c01862698fb31de45d2325039bebe215a1d70e9a/src/dashboard.html)
|RF-05|  Gerar um gráfico de linhas: Evolução de receitas e despesas ao longo dos dias, semanas, meses |Felipe Jardim  |[Dashboard HTML](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/c01862698fb31de45d2325039bebe215a1d70e9a/src/dashboard.html)|  
|RF-06|  Permitir que o usuário administre as categorias (inclusão, edição e exclusão). | Andrey Saraiva |[categorias.html](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/main/src/categorias.html)|
|RF-07|  Permitir o registro de todas as fontes de receita (salário, freelancers, investimentos, etc.) |Nicole Silva| [Receitas JS](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/main/js/receitas.js)
|RF-08|  Permitir o registro de despesas com a descrição de data, valor, categoria, método de pagamento, histórico.       |Nicole Silva|[Despesas JS](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/main/js/despesas.js)
|RF-09|  Apresentar um dashboard com informações importantes para análise da conta de forma fácil e rápida      |Felipe Jardim  |[Dashboard HTML](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/c01862698fb31de45d2325039bebe215a1d70e9a/src/dashboard.html)
|RF-10|  Permitir que o usuário veja, edite ou delete todas as transações realizadas durante o período do mês.      |Luiza Trevenzoli |[Transacoes HTML](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe1-t7-controla/blob/main/src/transacoes.html)


## Descrição das estruturas:

## Notícia
|
**Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

