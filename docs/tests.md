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
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

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

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

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

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.


Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



