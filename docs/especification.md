# Especificações do Projeto

## Personas

### Persona 1: Mariana Silva
- **Idade**: 28 anos
- **Cargo/Ocupação**: Analista de marketing em uma empresa de médio porte
- **Localização**: Belo Horizonte, MG
- **Renda mensal**: R$ 3.500
- **Estilo de vida**: Solteira, mora em um apartamento alugado no centro da cidade, gosta de sair com amigos nos finais de semana e acompanha séries e redes sociais no tempo livre.
- **Hábitos**: Passa muito tempo no celular navegando em sites e redes sociais, mas também usa o notebook para trabalho e tarefas pessoais. Prefere soluções digitais acessíveis e rápidas. Gasta boa parte da renda com alimentação fora de casa e compras impulsivas online.
- **Hábitos de consumo**: Consome conteúdos sobre produtividade e lifestyle no Instagram e YouTube, acessando sites pelo Chrome no celular ou notebook.
- **Objetivo principal**: Economizar para comprar seu primeiro apartamento e ter mais segurança financeira para tomar decisões independentes.
- **Desafios e frustrações**:
  - Não sabe exatamente para onde seu dinheiro vai todo mês, o que a deixa ansiosa no fim do mês.
  - Já entrou no cheque especial por falta de planejamento e sente culpa por isso.
  - Tem dificuldade em criar uma rotina de controle financeiro porque acha chato e trabalhoso usar planilhas ou ferramentas complexas.
- **Crenças**: Acredita que educação financeira é importante, mas pensa que é algo complicado, reservado para quem "entende de números".
- **Quem a influencia**: Amigos que já conseguiram comprar imóveis e influencers de lifestyle que falam sobre organização pessoal.
- **Que tipo de informações consome**: Vídeos curtos no Instagram e TikTok sobre dicas práticas de vida, além de artigos simples em sites de fácil acesso.
- **Tecnologias que usa**: Smartphone (Android) com navegador Chrome, notebook com Windows, redes sociais e sites como Google Drive para anotações.
- **Critérios de decisão**: Busca sites práticos, com boa usabilidade em telas pequenas (celular) e grandes (notebook), que carreguem rápido e tenham fontes legíveis com bom contraste (ela usa óculos para leitura e sente desconforto com textos pequenos ou claros demais).
- **Momento da jornada**: Está no início, reconhecendo que precisa de ajuda para organizar as finanças, mas ainda não sabe como começar.
- **Frase marcante**: "Quero parar de me preocupar com o fim do mês e começar a planejar meu futuro."

---

### Persona 2: João Oliveira
- **Idade**: 45 anos
- **Cargo/Ocupação**: Autônomo, dono de uma pequena loja de materiais de construção
- **Localização**: Belo Horizonte, MG
- **Renda mensal**: R$ 5.000 (varia conforme o mês)
- **Estilo de vida**: Casado, tem dois filhos adolescentes, mora em uma casa própria no subúrbio e dedica a maior parte do tempo ao trabalho. Nos finais de semana, gosta de descansar com a família.
- **Hábitos**: Usa o celular para gerenciar a loja (WhatsApp, sites de fornecedores) e o computador em casa ou no trabalho para tarefas mais detalhadas. Prefere soluções visuais e diretas que não exijam muitos passos.
- **Hábitos de consumo**: Lê notícias no portal UOL e assiste a vídeos no YouTube sobre gestão de pequenos negócios e finanças pessoais, acessando tudo pelo navegador (Chrome ou Edge).
- **Objetivo principal**: Criar uma reserva de emergência robusta e planejar a aposentadoria para garantir tranquilidade à família.
- **Desafios e frustrações**:
  - Mistura finanças pessoais e da loja, o que gera confusão e dificuldade em acompanhar os gastos.
  - Sente que não tem tempo para organizar as finanças por causa da rotina corrida e acha planilhas no Excel muito demoradas.
  - Tem uma reserva pequena (10% da renda), mas teme que ela não seja suficiente em emergências.
- **Crenças**: Acha que educação financeira é "gastar menos do que se ganha", mas acredita que precisa de uma ferramenta prática e acessível para aplicar isso.
- **Quem o influencia**: Esposa, que cobra mais organização financeira, e outros pequenos empresários que já conseguiram estabilizar seus negócios.
- **Que tipo de informações consome**: Tutoriais práticos no YouTube e artigos curtos em sites sobre gestão financeira para autônomos.
- **Tecnologias que usa**: Smartphone (Android) com Chrome, computador com Windows e Edge, WhatsApp e sites básicos como Google Sheets (mas com pouca frequência).
- **Critérios de decisão**: Prioriza sites que mostrem resultados claros (como gráficos), sejam fáceis de usar no celular em momentos rápidos (ex.: intervalo na loja) ou no computador em casa, e simples para quem não é expert em tecnologia.
- **Momento da jornada**: Está um passo à frente, já tentando organizar as finanças, mas sem uma solução eficiente.
- **Frase marcante**: "Quero ter certeza de que meu dinheiro está trabalhando para mim, não o contrário."

## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários relevantes para o projeto **Controla+**, um site voltado à gestão financeira pessoal. As **Histórias de Usuário** são uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da aplicação, refletindo as necessidades reais dos usuários e os valores que a solução busca entregar.

| **EU COMO... PERSONA**  | **QUERO/PRECISO ... FUNCIONALIDADE** | **PARA ... MOTIVO/VALOR** |
|-------------------------|--------------------------------------|---------------------------|
| Mariana Silva           | Registrar minhas despesas diárias incluindo valor, data e categoria | Identificar para onde meu dinheiro está indo e ajustar meus hábitos para economizar para meu apartamento |
| João Oliveira           | Ver o quanto já gastei em cada categoria e o quanto ainda tenho disponível no meu orçamento | Tomar decisões financeiras mais inteligentes e criar uma reserva de emergência sólida |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve realizar cálculos de soma e subtração entre os valores inseridos pelo usuário. | ALTA |  
|RF-002| A aplicação deve gerar gráficos referente aos valores fornecidos pelo usuário. | MÉDIA | 
|RF-003| A aplicação deve permitir cadastro do usuário. |MÉDIA|
|RF-004| A aplicação deve permitir que os usuários registrem suas despesas, incluindo valor, data e categoria. |ALTA|



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | MÉDIA | 
|RNF-002| A aplicação deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| A aplicação deve estar em conformidade com as leis e regulamentações de proteção de dados aplicáveis | ALTA |
|RNF-004| A aplicação deve se adaptar a diferentes tamanhos de tela e resoluções.  | MÉDIA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deve ser entregue até o final do semestre. Isso exige um planejamento eficiente, priorizando as funcionalidades essenciais e evitando a implementação de recursos que demandariam mais tempo do que o disponível, para garantir que todas asetapas do projeto sejam concluídas dentro do tempo estipulado. |
|02| O sistema deve ser completamente funcional utilizando apenas HTML, CSS e JavaScript. Nesta primeira etapa, vamos cuidar apenas da interação da aplicação com o usuário, desenvolvendo o lado interativo, ou seja, o que o usuário vê e com o que ele interage. Não será permitido o desenvolvimento de um módulo de backend para este projeto, com dados armazenados apenas localmente no próprio navegador, sem interação com banco de dados, autenticação, APIs ou servidor. Também não será possível criar um aplicativo mobile. |
|03| A única tecnologia permitida para o desenvolvimento do projeto neste momento é HTML para estruturação, CSS para estilização e JavaScript para interatividade, todas aprendidas nesta primeira etapa. Não é permitido o uso de frameworks como React ou PHP. |

