window.CURSO = window.CURSO || [];
CURSO.push({
  id: "m11", n: 11, title: "Assistentes e automações", icon: "⚙️",
  desc: "Você vai montar um assistente que já conhece o seu negócio, criar modelos reutilizáveis e deixar o WhatsApp Business, a agenda e os formulários trabalhando por você.",
  lessons: [
    {
      id: "m11-a1",
      title: "O seu assistente: um Projeto no Claude ou um GPT no ChatGPT",
      dur: 12,
      goal: "Ao final desta aula, você vai ter um assistente configurado com as informações do seu negócio, para não precisar explicar tudo de novo a cada conversa.",
      intro: [
        "Até agora, toda vez que você abria uma conversa nova, colava a ficha do negócio. Funciona, mas cansa. Existe um jeito de “ensinar” isso uma vez só.",
        "No Claude, isso se chama Projeto: um espaço onde você coloca instruções e arquivos, e todas as conversas dentro dele já sabem quem você é. No ChatGPT, você pode criar um GPT personalizado com a mesma ideia, ou usar a opção de personalizar o ChatGPT nas configurações. Esses recursos mudam com frequência e alguns podem exigir plano pago, dependendo da época. Confira o que a sua conta oferece.",
        "Exemplo: o Rafael, dono de uma marcenaria, criou um assistente com a ficha do negócio, a tabela de preços e o jeito de falar com clientes. Agora ele só escreve “orçamento de estante de 2 metros em MDF” e recebe a resposta no tom certo."
      ],
      steps: [
        "Separe o material: a ficha do negócio, a tabela de preços atualizada, as perguntas mais comuns dos clientes e exemplos de mensagens que você gosta.",
        "Peça à IA para escrever as instruções do assistente usando o pedido abaixo.",
        "No Claude, procure a área de Projetos e crie um novo. No ChatGPT, procure a opção de criar um GPT ou de personalizar. Os nomes e caminhos podem mudar.",
        "Cole as instruções e, se o aplicativo permitir, anexe os arquivos (tabela de preços, perguntas frequentes).",
        "Teste com 3 pedidos reais do seu dia a dia. Se algo sair errado, ajuste as instruções.",
        "Volte a usar o assistente sempre que for pedir algo do negócio, e atualize os arquivos quando o preço ou o horário mudar."
      ],
      prompts: [
        { label: "Escrever as instruções do assistente", text: "Quero criar um assistente de IA para o meu negócio. Aqui está a minha ficha: [cole a ficha do negócio].\nEscreva as instruções para esse assistente, em tópicos, incluindo:\n- Quem ele ajuda e qual o negócio.\n- Tom de voz: [ex.: simpático, simples, sem exageros, trata o cliente por você].\n- O que ele deve fazer: [ex.: responder clientes, escrever posts, montar orçamentos].\n- O que ele nunca deve fazer: inventar preço, prometer prazo sem eu confirmar, dar conselho jurídico ou de impostos.\n- Quando não souber algo, deve me perguntar em vez de inventar." },
        { label: "Testar o assistente", text: "Um cliente mandou esta mensagem: “[mensagem real de cliente, sem nome]”. Escreva a resposta que eu mandaria pelo WhatsApp, seguindo as suas instruções. Depois, me diga que informação estava faltando para responder melhor." }
      ],
      tip: "Crie um assistente por tipo de trabalho, se fizer sentido: um para atendimento, outro para marketing. Mas comece com um só e melhore aos poucos.",
      warn: "Não coloque nos arquivos do assistente senhas, dados bancários, CPF ou listas de clientes com telefone. E continue revisando o que ele escreve: um assistente bem configurado erra menos, mas ainda pode errar.",
      exercise: "Crie hoje o seu primeiro assistente (Projeto no Claude ou GPT no ChatGPT, conforme sua conta permitir) com a ficha do negócio e teste com uma mensagem real de cliente.",
      check: [
        "Sei para que serve um Projeto no Claude ou um GPT no ChatGPT.",
        "Tenho instruções escritas com o tom e as regras do meu negócio.",
        "Testei o assistente com pedidos reais e sei como ajustar."
      ]
    },
    {
      id: "m11-a2",
      title: "Modelos reutilizáveis: pare de começar do zero",
      dur: 8,
      goal: "Ao final desta aula, você vai ter uma coleção de pedidos e textos prontos, guardados no celular, para as tarefas que se repetem toda semana.",
      intro: [
        "Se você olhar sua semana, vai perceber: muita coisa se repete. O post da promoção de sexta, a mensagem de confirmação de horário, o pedido ao fornecedor, a resposta para “qual o valor?”.",
        "Em vez de escrever um pedido novo para a IA toda vez, você guarda os melhores como modelos, com as partes que mudam em [colchetes]. Na hora de usar, é copiar, trocar os colchetes e colar.",
        "A Simone, do salão, tem 6 modelos guardados numa nota do celular. Ela diz que economiza o tempo de um café por dia."
      ],
      steps: [
        "Liste as 5 tarefas de texto que você mais repete na semana.",
        "Para cada uma, pegue o melhor pedido que você já fez para a IA (ou use o pedido abaixo para criar).",
        "Troque as partes que mudam por [colchetes] com uma dica dentro (ex.: [nome do produto], [data]).",
        "Guarde tudo num lugar só: uma nota no celular chamada “Modelos IA”, ou dentro do seu assistente da aula anterior.",
        "Na próxima vez que precisar, copie, troque os colchetes e cole na IA. Se o resultado não ficar bom, melhore o modelo."
      ],
      prompts: [
        { label: "Transformar em modelo", text: "Aqui está um pedido que funcionou bem para mim: “[cole o pedido]”.\nTransforme em um modelo reutilizável: troque tudo o que muda a cada vez por [colchetes] com uma dica dentro, e deixe fixo o que sempre se repete (tom, tamanho, formato). Me devolva só o modelo, pronto para copiar." },
        { label: "Descobrir o que vale virar modelo", text: "Tenho um(a) [tipo de negócio]. Estas são as tarefas da minha semana: [liste]. Quais delas valem a pena virar modelo de pedido para a IA? Para as 3 mais úteis, escreva o modelo completo com [colchetes]." }
      ],
      example: {
        bad: "Toda sexta escrever do zero: “faz um post da promoção”.",
        good: "Modelo guardado: “Escreva um post para o Instagram da [nome do negócio] sobre a promoção de [produto] por [preço], válida até [data]. Tom alegre, até 5 linhas, termine com ‘Peça pelo WhatsApp’.”"
      },
      tip: "Dê um nome curto a cada modelo (ex.: “POST PROMO”, “CONFIRMA HORÁRIO”). Fica fácil achar na lista.",
      exercise: "Crie agora a nota “Modelos IA” no celular e guarde nela os 3 pedidos que você mais usa, já com os [colchetes].",
      check: [
        "Sei identificar quais tarefas valem virar modelo.",
        "Sei transformar um pedido em modelo com [colchetes].",
        "Tenho meus modelos guardados num lugar fácil de achar."
      ]
    },
    {
      id: "m11-a3",
      title: "WhatsApp Business no automático (saudação, ausência, respostas rápidas, etiquetas, catálogo)",
      dur: 12,
      goal: "Ao final desta aula, você vai ter configurado pelo menos três recursos do WhatsApp Business com textos escritos com a ajuda da IA.",
      intro: [
        "O WhatsApp Business é o aplicativo gratuito do WhatsApp para empresas. Além de conversar, ele tem ferramentas que trabalham por você: mensagem de saudação (enviada para quem fala com você pela primeira vez ou depois de um tempo), mensagem de ausência (quando você está fechado), respostas rápidas (textos prontos que você chama com um atalho), etiquetas (para organizar conversas) e catálogo (vitrine dos seus produtos).",
        "Essas ferramentas ficam em “Ferramentas comerciais”, nas configurações do aplicativo. O caminho pode variar conforme a versão e o celular.",
        "Aqui a IA entra para escrever os textos. O resultado: a confeitaria que responde às 23h que “já estamos fechados, amanhã às 8h te atendemos”, sem a dona precisar acordar."
      ],
      steps: [
        "Peça à IA os textos de saudação, ausência e 5 respostas rápidas, com o primeiro pedido abaixo.",
        "No WhatsApp Business, procure “Ferramentas comerciais” nas configurações. Ative a mensagem de saudação e cole o texto.",
        "Ative a mensagem de ausência e escolha quando ela vale (fora do horário de atendimento, por exemplo).",
        "Em respostas rápidas, cadastre cada texto com um atalho curto (ex.: /preco, /endereco, /pix).",
        "Crie etiquetas para organizar as conversas, por exemplo: Novo cliente, Pedido em andamento, Pago, Entregue.",
        "Monte o catálogo com fotos reais, nome, preço e descrição curta de cada produto ou serviço. Use o segundo pedido para as descrições."
      ],
      prompts: [
        { label: "Textos para o WhatsApp Business", text: "Meu negócio: [tipo e nome]. Horário de atendimento: [dias e horas]. Atendo em: [bairro/cidade, entrega ou retirada].\nEscreva, em tom [simpático e simples]:\n1. Mensagem de saudação (até 3 linhas), dizendo como posso ajudar.\n2. Mensagem de ausência (até 3 linhas), com o horário em que volto a responder.\n3. Cinco respostas rápidas para as perguntas mais comuns: [ex.: preço, endereço, formas de pagamento, prazo de entrega, como encomendar]. Deixe em [colchetes] o que eu preciso completar.\nUse no máximo 1 emoji por mensagem." },
        { label: "Descrições para o catálogo", text: "Escreva descrições curtas (até 2 linhas) para o catálogo do WhatsApp Business destes produtos: [lista com nome, tamanho e preço].\nDescreva só o que é verdade sobre o produto (ingredientes, medidas, material). Não mude preços e não exagere." }
      ],
      tip: "Releia as respostas rápidas uma vez por mês. Preço, horário e chave de pagamento mudam, e um texto automático desatualizado confunde o cliente.",
      warn: "Mensagens automáticas não substituem você: entre na conversa logo que puder. Não coloque dados sensíveis nas respostas rápidas além do necessário para o cliente pagar, e confira a chave de pagamento com muito cuidado.",
      exercise: "Configure hoje a mensagem de ausência e pelo menos três respostas rápidas no seu WhatsApp Business, com textos gerados pela IA.",
      check: [
        "Sei onde ficam as Ferramentas comerciais do WhatsApp Business.",
        "Tenho mensagem de saudação, de ausência e respostas rápidas configuradas.",
        "Sei usar etiquetas e o catálogo para organizar e vender."
      ]
    },
    {
      id: "m11-a4",
      title: "Google Agenda e Formulários para agendar e organizar",
      dur: 10,
      goal: "Ao final desta aula, você vai ter um formulário de pedidos ou agendamento e uma rotina de uso da Google Agenda para o seu negócio.",
      intro: [
        "Quantas vezes um horário ficou marcado só na conversa do WhatsApp e foi esquecido? A Google Agenda é gratuita, já vem em muitos celulares Android e também funciona no iPhone. Ela avisa antes do compromisso e pode ser compartilhada com quem trabalha com você.",
        "O Google Formulários cria uma página simples de perguntas que o cliente preenche pelo celular: pedido de encomenda, orçamento, cadastro, pesquisa de satisfação. As respostas caem organizadas numa lista ou planilha.",
        "A IA ajuda a decidir quais perguntas fazer e a escrever tudo de forma clara. Exemplo: a Fernanda, da confeitaria, trocou 20 mensagens por encomenda por um formulário de 6 perguntas."
      ],
      steps: [
        "Escolha um uso: agendamento de horários (salão, serviço) ou pedido de encomenda (confeitaria, marcenaria).",
        "Peça à IA as perguntas do formulário com o primeiro pedido abaixo.",
        "Entre em Google Formulários com sua conta Google (pelo navegador do celular ou do computador), crie um formulário em branco e cole as perguntas.",
        "Teste: preencha você mesmo, veja onde chegam as respostas e ajuste o que ficou confuso.",
        "Coloque o link do formulário na resposta rápida do WhatsApp e na bio do Instagram.",
        "Na Google Agenda, crie um evento para cada compromisso confirmado, com lembrete. Use cores diferentes para tipos diferentes (entrega, visita, atendimento)."
      ],
      prompts: [
        { label: "Perguntas do formulário", text: "Quero criar um Google Formulário para [agendamento / pedido de encomenda / orçamento] do meu negócio, [tipo e nome].\nSugira no máximo 8 perguntas, na ordem certa, dizendo para cada uma o tipo de resposta (texto curto, múltipla escolha, data, hora).\nPeça só o necessário: primeiro nome, contato e o que é preciso para o pedido. Não peça CPF nem dados de cartão.\nEscreva também um título e uma frase de boas-vindas para o topo do formulário." },
        { label: "Organizar minha semana", text: "Estes são os compromissos da minha semana: [cole a lista]. Organize por dia e hora, aponte conflitos de horário e sugira quanto tempo de folga deixar entre um e outro. Me devolva em formato fácil de passar para a Google Agenda." }
      ],
      tip: "Para serviços com hora marcada, deixe sempre um intervalo entre atendimentos na agenda. Atraso de um cliente não vira atraso do dia inteiro.",
      warn: "Peça no formulário só os dados de que você realmente precisa e não peça CPF, senha ou dados de cartão. Quem tem acesso às respostas tem acesso aos dados dos clientes: não compartilhe a planilha com qualquer pessoa.",
      exercise: "Crie hoje um formulário de pedido ou agendamento com as perguntas sugeridas pela IA, preencha um teste e coloque o link numa resposta rápida do WhatsApp.",
      check: [
        "Sei criar um Google Formulário simples para o meu negócio.",
        "Sei pedir à IA as perguntas certas, sem coletar dados demais.",
        "Uso a Google Agenda com lembretes para não esquecer compromissos."
      ]
    },
    {
      id: "m11-a5",
      title: "Primeiros passos com automações (Zapier e Make): o que são e quando valem a pena",
      dur: 10,
      goal: "Ao final desta aula, você vai entender o que é uma automação, reconhecer uma tarefa do seu negócio que poderia ser automatizada e saber como testar com segurança.",
      intro: [
        "Esta aula é opcional e um pouco mais avançada. Se o seu dia a dia já está bem com o que você aprendeu até aqui, pode pular sem culpa e voltar depois.",
        "Automação é configurar uma vez algo que depois acontece sozinho. Zapier e Make são serviços que ligam um aplicativo a outro: “quando acontecer isto aqui, faça aquilo lá”. Exemplo simples: quando chegar uma resposta nova no seu Google Formulário de encomendas, enviar um e-mail para você com o resumo e adicionar uma linha numa planilha de pedidos.",
        "Os dois têm plano gratuito com limites, e os planos e telas mudam com o tempo. Vale a pena quando uma tarefa repetitiva se repete muitas vezes por semana e é sempre igual. Se acontece duas vezes por mês, fazer na mão ainda é mais simples."
      ],
      steps: [
        "Liste tarefas que você faz sempre do mesmo jeito, várias vezes por semana (ex.: copiar pedidos do formulário para a planilha, avisar a equipe de uma encomenda nova).",
        "Escolha uma só, a mais simples. Descreva em uma frase: “Quando [acontece X], quero que [aconteça Y]”.",
        "Use o primeiro pedido abaixo para a IA te explicar o passo a passo e os cuidados.",
        "Crie uma conta no plano gratuito do Zapier ou do Make e monte a automação seguindo as orientações da própria ferramenta.",
        "Teste com dados de mentira várias vezes. Só depois deixe ligada, e confira por algumas semanas se está funcionando."
      ],
      prompts: [
        { label: "Planejar minha primeira automação", text: "Tenho um(a) [tipo de negócio] e nunca usei automações. Quero que: quando [ex.: chegar uma resposta nova no meu Google Formulário de encomendas], [ex.: eu receba um e-mail com o resumo e a resposta vá para uma planilha].\nMe explique em linguagem bem simples:\n1. Se vale a pena automatizar isso ou se é melhor continuar fazendo na mão.\n2. O passo a passo geral no [Zapier / Make], sem inventar nomes exatos de botões.\n3. Como testar antes de confiar.\n4. O que pode dar errado e como eu percebo." },
        { label: "Isso vale automatizar?", text: "Estas são tarefas repetitivas do meu negócio, com quantas vezes acontecem por semana: [liste]. Para cada uma, diga se vale automatizar agora, depois ou nunca, e por quê. Seja realista para um negócio pequeno com pouco tempo." }
      ],
      tip: "Comece com uma automação que só avisa ou organiza (e-mail, planilha). Evite começar com algo que manda mensagem para o cliente: se der erro, quem vê o erro é o cliente.",
      warn: "Automação errada repete o erro sozinha, muitas vezes. Teste com dados de mentira, confira de tempos em tempos e não conecte contas de banco ou de pagamento. Ao ligar seus aplicativos, você dá acesso a eles: use senhas fortes e só conecte o necessário. Comece pelo plano gratuito e veja se faz diferença antes de pagar.",
      exercise: "Escreva numa frase uma tarefa do seu negócio no formato “Quando X, quero que Y” e use o pedido da IA para descobrir se vale automatizar.",
      check: [
        "Sei explicar o que é uma automação com minhas palavras.",
        "Sei reconhecer quando uma tarefa vale (ou não) ser automatizada.",
        "Sei que devo começar no plano gratuito e testar bastante antes de confiar."
      ]
    }
  ]
});
