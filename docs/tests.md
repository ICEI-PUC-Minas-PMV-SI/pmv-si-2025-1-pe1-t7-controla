# Testes

# Teste de Software

## Plano de Testes de Software

**Caso de Teste** | **CT01 - Cadastro**
 :--------------: | ------------
**Procedimento**  | 1) Preencha todos os campos do formulário <br> 2) Clique no botão "Cadastrar" <br> 
**Requisitos associados** | RF-01
**Resultado esperado** | Usuário cadastrado
**Dados de entrada** | Nome, Email, Senha, Confirmação de senha
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Login**
 :--------------: | ------------
**Procedimento**  | 1) Preencha todos os campos do formulário <br> 2) Clique no botão "Entrar" <br> 
**Requisitos associados** | RF-02
**Resultado esperado** | Acesso ao aplicativo logado na conta informada
**Dados de entrada** | Email e Senha
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Recuperar senha**
 :--------------: | ------------
**Procedimento**  | 1) Clique na opção "Entrar" <br> 2) Clique em "Esqueci minha senha" <br> 3) Informe o email usado no cadastro <br> 4) Abra o email <br> 5) Redefinir a senha <br>
**Requisitos associados** | RF-03
**Resultado esperado** | Senha redefinida
**Dados de entrada** | Email
**Resultado obtido** | Fracasso

**Caso de Teste** | **CT04 - Gráfico de cartões**
 :--------------: | ------------
**Procedimento**  | 1) Abrir a tela de dashboard <br>
**Requisitos associados** | RF-04
**Resultado esperado** | Exibir um gráfico que compara o uso do cartão de crédito com o cartão de débito
**Dados de entrada** | Inserção de dados na tela de despesas
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Gráfico de receitas e despesas**
 :--------------: | ------------
**Procedimento**  | 1) Abrir a tela de dashboard <br> 
**Requisitos associados** | RF-05
**Resultado esperado** | Exibir um gráfico que compara a evolução de Receitas e Despesas ao Longo do Tempo contendo filtros temporais
**Dados de entrada** | Inserção de dados na tela de Receitas e Despesas
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Edição de categorias**
 :--------------: | ------------
**Procedimento**  | 1) <br> 
**Requisitos associados** | RF-00
**Resultado esperado** | 
**Dados de entrada** | 
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Registro de Receitas**
 :--------------: | ------------
**Procedimento**  | 1) Abrir a tela de Receitas <br> 2) Preencha todos os campos do formulário de forma valida <br> 3) Clique no botão "Salvar" <br> 
**Requisitos associados** | RF-07
**Resultado esperado** | Informações salvas, <br> Aviso que as informações foram salvas, <br> Exibição de um pequeno histórico que atualiza sempre que uma nova receita é adicionada
**Dados de entrada** | Data, Valor, Categoria e Método de recebimento
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT08 - Registro de Despesas**
 :--------------: | ------------
**Procedimento**  | 1) Abrir a tela de Despesas <br> 2) Preencha todos os campos do formulário de forma valida <br> 3) Clique no botão "Salvar"<br> 
**Requisitos associados** | RF-08
**Resultado esperado** | Informações salvas, <br> Aviso que as informações foram salvas, <br> Exibição de um pequeno histórico que atualiza sempre que uma nova despesa é adicionada
**Dados de entrada** | Data, Valor, Categoria e Método de pagamento
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT09 - Apresentar um dashboard**
 :--------------: | ------------
**Procedimento**  | 1) Abrir a tela de dashboard <br> 
**Requisitos associados** | RF-09
**Resultado esperado** | Exibir o SALDO ATUAL, TOTAL DE RECEITAS, TOTAL DE DESPESAS contendo filtros temporais
**Dados de entrada** | Inserção de dados na tela de Receitas e Despesas
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT10 - Responsividade**
 :--------------: | ------------
**Procedimento**  | 1) Abrir o site em diferentes tipos de telas <br> 
**Requisitos associados** | RF-10
**Resultado esperado** | Site se adapta para diferentes tipos de telas
**Dados de entrada** | 
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT11 - Velocidade**
 :--------------: | ------------
**Procedimento**  | 1) Testar o tempo de resposta <br> 
**Requisitos associados** | RNF-01
**Resultado esperado** | Processo de requisições do usuário em no máximo 3s.
**Dados de entrada** | 
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT12 - Proteção de dados**
 :--------------: | ------------
**Procedimento**  | 1) Verificar a fonte de todos os elementos utilizados <br> 
**Requisitos associados** | RNF-02
**Resultado esperado** | Estar em conformidade com as leis e regulamentações de proteção de dados aplicáveis.
**Dados de entrada** | 
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT13 - Transações**
 :--------------: | ------------
**Procedimento**  | 1) Abrir a tela de Transações <br> 2) Clicar no ícone desejado <br>
**Requisitos associados** | RF-10
**Resultado esperado** | Permitir que o usuário veja, edite ou delete todas as transações realizadas durante o período do mês.
**Dados de entrada** | Data, Valor, Categoria, Método de transações, Ações
**Resultado obtido** | Sucesso

## Registro dos Testes de Software

|*Caso de Teste*                                 |*CT01 - Cadastro*                                         |
|---|---|
|Requisito Associado | RF-01 - Permitir cadastro do usuário|
|Link do vídeo do teste realizado: | https://lnk.ink/xQ6BY | 

|*Caso de Teste*                                 |*CT02 - Login*                                        |
|---|---|
|Requisito Associado | RF-02 - Permitir login do usuário|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT03 - Recuperar senha*                                        |
|---|---|
|Requisito Associado | RF-03 - Permitir o usuário recuperar a senha|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |

|*Caso de Teste*                                 |*CT04 - Gráfico de cartões*                                        |
|---|---|
|Requisito Associado | RF-04 - Gerar um gráfico de pizza: Comparativo cartão de crédito vs. débito nas despesas|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |

|*Caso de Teste*                                 |*CT05 - Gráfico de receitas e despesas*                                        |
|---|---|
|Requisito Associado | RF-05 - Gerar um gráfico de linhas: Evolução de receitas e despesas ao longo dos dias, semanas, meses|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |

|*Caso de Teste*                                 |*CT06 - Edição de categorias*                                        |
|---|---|
|Requisito Associado | RF-06 - Permitir que o usuário edite as categorias.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |

|*Caso de Teste*                                 |*CT07 - Registro de Receitas*                                        |
|---|---|
|Requisito Associado | RF-07 - Permitir o registro de todas as fontes de receita (salário, freelancers, investimentos, etc).|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |

|*Caso de Teste*                                 |*CT08 - Registro de Despesas*                                        |
|---|---|
|Requisito Associado | RF-08 - Permitir o registro de despesas com a descrição de data, valor, categoria, método de pagamento, histórico.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |

|*Caso de Teste*                                 |*CT09 - Apresentar um dashboard*                                        |
|---|---|
|Requisito Associado | RF-09 - Apresentar um dashboard com informações importantes para análise da conta de forma fácil e rápida.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |

|*Caso de Teste*                                 |*CT10 - Responsividade*                                        |
|---|---|
|Requisito Associado | RNF-01 - A aplicação deve ser responsiva.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |

|*Caso de Teste*                                 |*CT11 - Velocidade*                                        |
|---|---|
|Requisito Associado | RNF-02 - A aplicação deve processar requisições do usuário em no máximo 3s.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |

|*Caso de Teste*                                 |*CT12 - Proteção de dados*                                        |
|---|---|
|Requisito Associado | RNF-03 - Estar em conformidade com as leis e regulamentações de proteção de dados aplicáveis.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |

|*Caso de Teste*                                 |*CT13 - Transações*                                        |
|---|---|
|Requisito Associado | RF-10 - Permitir que o usuário veja, edite ou delete todas as transações realizadas durante o período do mês.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |


## Avaliação dos Testes de Software

Os testes realizados apresentaram resultados satisfatórios, confirmando o bom desempenho do sistema. Os principais requisitos funcionais e não funcionais definidos na fase inicial do projeto foram plenamente atendidos. Além disso, o design manteve-se consistente e alinhado ao longo de toda a aplicação.

A inclusão de gráficos contribuiu para uma navegação mais intuitiva e visualmente atrativa, facilitando a compreensão dos dados e reforçando o objetivo central da plataforma: oferecer uma solução simples, prática e acessível para o controle de finanças pessoais. A proposta é atender tanto usuários com rotinas corridas quanto aqueles com pouca experiência em registrar receitas e despesas.

O módulo de registro financeiro permite ao usuário inserir as informações mais relevantes sobre seus gastos e ganhos, proporcionando maior clareza sobre sua situação econômica.

Vale destacar que algumas funcionalidades desejadas não puderam ser implementadas devido a limitações técnicas, metodológicas e de linguagem impostas ao escopo do projeto. No entanto, os resultados alcançados demonstram a viabilidade e o potencial da plataforma como ferramenta de apoio à organização financeira.


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja registrar suas receitas e despesas a fim de estar ciente do seu saldo atual. |
| 2             | Você é uma pessoa que deseja visualizar de forma clara a porcentagem de gastos com cartão de Crédito e cartão de Débito. |
| 3             | Você é uma pessoa que deseja registrar dados do valor que entra e sai filtrado por categoria podendo editar conforme suas categorias pessoais |
| 4             | Você é uma pessoa que deseja visualizar de forma clara um gráfico que compara Despesas e Receitas. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja registrar suas receitas e despesas a fim de estar ciente do seu saldo atual.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 26.60 segundos                  |
| 2       | SIM             | 5                    | 40.17 segundos                  |
| 3       | SIM             | 5                    | 23.22 segundos                  |
| 4       | SIM             | 4                    | 31.15 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 4,75                | 30.29 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.78 segundos |


    Muito intuitivo. 


Cenário 2: Você é uma pessoa que deseja visualizar de forma clara a porcentagem de gastos com cartão de Crédito e cartão de Débito.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 28.03 segundos                          |
| 2       | SIM             | 5                    | 35.23 segundos                          |
| 3       | SIM             | 5                    | 30.21 segundos                          |
| 4       | SIM             | 5                    | 31.42 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.75                | 31.22 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 10.15 segundos |


    Importante poder visualizar essas informações.
    Sugestão de melhoria: poder visualizar tambem um comparativo de outras formas de pagamento.
    

 Cenário 3: Você é uma pessoa que deseja registrar dados do valor que entra e sai filtrado por categoria podendo editar conforme suas categorias pessoais.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 40.51 segundos                          |
| 2       | SIM             | 4                    | 45.18 segundos                          |
| 3       | SIM             | 5                    | 39.52 segundos                          |
| 4       | SIM             | 4                    | 41.15 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.5                | 41.59 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 24.41 segundos |


  


  Cenário 4: Você é uma pessoa que deseja visualizar de forma clara um gráfico que compara Despesas e Receitas.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 31.22 segundos                          |
| 2       | SIM             | 4                    | 28.43 segundos                          |
| 3       | SIM             | 5                    | 32.26 segundos                          |
| 4       | SIM             | 5                    | 39.12 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.75                | 32.73 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 12.27 segundos |


 

## Avaliação dos Testes de Usabilidade


Com base nos testes realizados, foi possível verificar que a aplicação apresentou um desempenho muito positivo quanto à usabilidade. Em todos os quatro cenários propostos, os usuários obtiveram 100% de taxa de sucesso, concluindo as tarefas com êxito.

A satisfação subjetiva também se destacou, com média de 4.68 pontos, o que demonstra que os usuários consideraram a interação com a plataforma agradável, compreensível e eficiente. Comentários adicionais reforçaram a importância de algumas funcionalidades, como a visualização de informações financeiras por forma de pagamento, além de sugestões construtivas para aprimorar a interface.

Em relação ao tempo de conclusão das tarefas, observou-se uma diferença significativa entre os usuários e o especialista/desenvolvedor, o que é esperado, considerando o conhecimento prévio do desenvolvedor sobre o sistema. Por exemplo, no primeiro cenário, os usuários levaram em média 30.29 segundos, enquanto o especialista concluiu em 13.78 segundos. Esse padrão se repetiu nos demais cenários.

Apesar dessas diferenças de tempo, o desempenho dos usuários foi considerado satisfatório. Ainda assim, os resultados indicam oportunidades de melhoria na usabilidade, especialmente no que diz respeito à otimização do fluxo de navegação e à apresentação visual de certas informações, para torná-las ainda mais acessíveis e intuitivas.

De modo geral, os testes demonstram que a aplicação cumpre bem sua proposta de oferecer uma solução prática e eficaz para o controle financeiro, mesmo para usuários com pouca familiaridade com esse tipo de sistema.



