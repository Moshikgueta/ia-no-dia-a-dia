window.CURSO = window.CURSO || [];
CURSO.push({
  id: "m01", n: 1, title: "Comece aqui", icon: "👋",
  desc: "Você entende o que é IA, cria sua conta no Claude ou no ChatGPT, aprende as regras de segurança e sai com um plano simples para aproveitar o curso.",
  lessons: [
    {
      id: "m01-a1",
      title: "O que é IA, sem mistério",
      dur: 7,
      goal: "Ao final desta aula você vai saber explicar, com suas palavras, o que a IA faz bem, o que ela faz mal e onde ela pode ajudar no seu negócio.",
      intro: [
        "IA quer dizer “inteligência artificial”. Na prática, para você, é um programa no celular com quem você conversa escrevendo, como no WhatsApp. Você pede um texto, uma ideia ou uma conta, e ele responde em segundos. Claude e ChatGPT são dois desses programas.",
        "Pense na dona Célia, que tem uma confeitaria. Toda noite ela gastava meia hora para escrever a lista de encomendas do dia seguinte e responder clientes. Com a IA, ela dita as informações e pede: “organize isso em uma lista por horário de entrega”. Pronto. Ela continua decidindo tudo; a IA só faz o trabalho de escrever e organizar.",
        "A IA é como um ajudante muito rápido, que escreve bem, mas que não conhece o seu negócio e às vezes se engana com toda a confiança. Por isso, quem manda e quem confere é sempre você."
      ],
      steps: [
        "Pegue um papel ou abra o bloco de notas do celular.",
        "Anote 3 tarefas de escrita que você faz toda semana (exemplo: responder preço no WhatsApp, escrever legenda de post, montar lista de compras).",
        "Anote 2 tarefas em que você sempre “trava” por falta de ideia (exemplo: nome para promoção, texto de aviso para clientes).",
        "Marque com um X as tarefas que dependem de dados pessoais de clientes. Essas, por enquanto, ficam fora da IA.",
        "Guarde essa lista: ela vai ser o seu mapa durante o curso."
      ],
      prompts: [
        { label: "Primeira conversa", text: "Eu tenho um(a) [tipo de negócio, ex.: salão de beleza] em [cidade]. Nunca usei inteligência artificial. Me explique, em linguagem simples e em no máximo 10 linhas, 5 jeitos práticos de você me ajudar no dia a dia do meu negócio. Dê um exemplo curto para cada um." }
      ],
      tip: "Trate a IA como um estagiário esperto no primeiro dia: ela escreve rápido, mas precisa que você explique tudo e revise o resultado.",
      warn: "A IA erra, inventa informações e não sabe o que aconteceu hoje no seu bairro. Nunca envie nada para um cliente sem ler antes.",
      exercise: "Faça a lista de 5 tarefas do passo a passo, pensando na sua semana real. Circule a que mais toma seu tempo: ela será a primeira que você vai resolver com IA.",
      check: [
        "Sei explicar em uma frase o que é IA.",
        "Sei que a IA erra e que eu sempre confiro antes de usar.",
        "Tenho uma lista de tarefas do meu negócio em que a IA pode ajudar."
      ]
    },
    {
      id: "m01-a2",
      title: "Claude e ChatGPT: criar a conta e conhecer a tela",
      dur: 10,
      goal: "Ao final desta aula você vai ter uma conta criada, o aplicativo instalado no celular e vai ter feito sua primeira pergunta.",
      intro: [
        "Claude e ChatGPT funcionam de um jeito muito parecido: você escreve, eles respondem. Os dois têm plano gratuito, que já serve para começar. Os planos pagos liberam mais uso e alguns recursos extras, mas isso muda com frequência, então não precisa decidir agora.",
        "O seu Joaquim, da marcenaria, achou que ia ser complicado. Em dez minutos ele baixou o aplicativo, entrou com o e-mail e já pediu um texto para explicar ao cliente a diferença entre MDF e madeira maciça. O segredo é perder o medo de tocar nos botões: nada quebra.",
        "Neste curso, os pedidos funcionam nos dois. Escolha um para começar. Mais tarde, se quiser, crie conta no outro também."
      ],
      steps: [
        "Abra a loja de aplicativos do celular (Play Store ou App Store) e procure por “Claude” ou “ChatGPT”. Confira se o aplicativo é da empresa oficial: Anthropic (Claude) ou OpenAI (ChatGPT).",
        "Instale, abra e toque na opção de criar conta. Use um e-mail que você acessa sempre e crie uma senha forte, só sua.",
        "Conheça a tela: embaixo fica a caixa onde você escreve; ao lado costuma haver o botão de anexar (geralmente um clipe ou um +) e, em muitos casos, um microfone para falar em vez de digitar.",
        "Procure o menu (geralmente três risquinhos ou o seu nome no canto). Ali ficam as conversas antigas e a opção de começar uma conversa nova.",
        "Faça sua primeira pergunta usando o pedido pronto abaixo e leia a resposta com calma.",
        "Toque em “nova conversa” e faça outra pergunta. Cada assunto em uma conversa separada deixa tudo mais organizado."
      ],
      prompts: [
        { label: "Teste de boas-vindas", text: "Olá! Sou dono(a) de [tipo de negócio] e estou usando você pela primeira vez. Me responda em português simples: como eu devo escrever meus pedidos para receber respostas melhores? Dê 3 dicas curtas." }
      ],
      tip: "Toque no microfone e fale o seu pedido, como se mandasse um áudio. Para quem passa o dia correndo, é muito mais rápido do que digitar.",
      warn: "Os nomes e a posição dos botões mudam com as atualizações dos aplicativos. Se algo estiver diferente do que você vê aqui, procure pelo símbolo parecido. E nunca use a mesma senha do banco ou do e-mail.",
      exercise: "Crie sua conta, instale o aplicativo e faça duas perguntas em conversas separadas: uma sobre o seu negócio e outra sobre qualquer dúvida do seu dia.",
      check: [
        "Tenho uma conta criada no Claude ou no ChatGPT.",
        "Sei onde escrever, onde anexar e onde começar uma conversa nova.",
        "Já fiz minha primeira pergunta e li a resposta."
      ]
    },
    {
      id: "m01-a3",
      title: "As regras de ouro: segurança e privacidade",
      dur: 8,
      goal: "Ao final desta aula você vai saber exatamente o que pode e o que nunca deve colar na IA, e quais decisões precisam de um profissional.",
      intro: [
        "Tudo o que você escreve na IA sai do seu celular e vai para os computadores da empresa que fez o programa. Por isso, a regra é simples: só escreva ali o que você escreveria num cartaz dentro da sua loja.",
        "A Patrícia, do salão de beleza, quis organizar a lista de clientes e pensou em colar nomes, telefones e CPF. Parou a tempo. Em vez disso, escreveu “Cliente 1, Cliente 2” e pediu só o modelo da planilha. Resultado igual, sem expor ninguém.",
        "A IA também não é contador, advogado nem médico. Ela pode ajudar a entender um assunto e a preparar perguntas, mas a decisão sobre impostos, contratos e saúde é de um profissional."
      ],
      steps: [
        "Decore a lista do que NUNCA colar: senhas, dados de cartão, CPF, RG, endereço e telefone de clientes, dados bancários e fotos de documentos.",
        "Antes de colar qualquer texto, troque os nomes por apelidos: “Cliente A”, “Fornecedor B”.",
        "Abra as configurações do aplicativo (pelo menu ou pelo seu nome) e dê uma olhada na parte de privacidade e dados. Veja as opções que existem para o seu plano.",
        "Leia toda resposta antes de usar. Números, preços, datas e leis: confira sempre em outra fonte.",
        "Para impostos, contratos, trabalhistas e saúde, use a IA só para preparar perguntas e leve ao contador, advogado ou profissional de saúde."
      ],
      prompts: [
        { label: "Preparar conversa com o contador", text: "Sou dono(a) de [tipo de negócio], sou [MEI / pequena empresa] e tenho uma dúvida sobre [assunto, ex.: emitir nota fiscal para empresa]. Não quero que você decida por mim. Me ajude a montar uma lista de 5 perguntas claras para eu levar ao meu contador." }
      ],
      example: {
        bad: "Organize meus clientes: Maria Souza, CPF 123..., Rua das Flores 45, cartão final 4421.",
        good: "Crie um modelo de tabela para eu controlar clientes do meu salão, com colunas para apelido, serviço preferido e data da última visita. Use exemplos inventados."
      },
      warn: "Nunca cole senhas, dados de cartão, CPF ou dados pessoais de clientes. Decisões legais, fiscais e de saúde são sempre de um profissional.",
      exercise: "Escreva num papel as 3 regras de ouro com suas palavras e cole perto do caixa ou salve como foto no celular. Depois, use o pedido pronto com uma dúvida real que você tem para o contador.",
      check: [
        "Sei o que nunca devo colar na IA.",
        "Sei trocar nomes de clientes por apelidos antes de pedir ajuda.",
        "Sei que imposto, contrato e saúde ficam com um profissional."
      ]
    },
    {
      id: "m01-a4",
      title: "Como aproveitar este curso",
      dur: 6,
      goal: "Ao final desta aula você vai ter um ritmo de estudo que cabe na sua semana e um caderno para guardar os pedidos que funcionam.",
      intro: [
        "Este curso foi feito para quem não tem tempo. Cada aula é curta e termina com uma tarefa real do seu negócio. Você não precisa assistir tudo de uma vez: o que muda o seu dia é usar o que aprendeu logo depois.",
        "O Marcos, da oficina mecânica, separou 15 minutos depois do almoço, três vezes por semana. Em um mês já tinha respostas prontas para o WhatsApp e um calendário de posts. Pouco, mas todo dia, vale mais do que muito de vez em quando.",
        "Você também vai montar o seu “caderno de pedidos”: um lugar onde guarda os textos que deram certo para usar de novo."
      ],
      steps: [
        "Escolha 3 horários fixos na semana, de 15 minutos cada, e coloque um alarme no celular.",
        "Crie o seu caderno de pedidos: pode ser uma nota no celular ou uma conversa no WhatsApp só com você mesmo.",
        "Em cada aula, copie o pedido pronto, troque o que está entre [colchetes] pelas informações do seu negócio e teste.",
        "Quando um pedido funcionar bem, cole no caderno com um nome fácil, como “resposta de preço”.",
        "No fim de cada aula, marque os itens de “Eu consigo” para ver seu avanço."
      ],
      prompts: [
        { label: "Plano de estudo", text: "Sou dono(a) de [tipo de negócio] e trabalho [horário de trabalho]. Tenho [número] minutos livres por dia. Monte um plano simples de 4 semanas para eu aprender a usar inteligência artificial no meu negócio, com uma tarefa curta por dia. Responda em uma lista." }
      ],
      tip: "Crie uma conversa no WhatsApp só com você mesmo (ou um grupo só seu) e use como caderno de pedidos. Fica sempre à mão.",
      exercise: "Coloque os 3 alarmes de estudo no celular agora e crie o seu caderno de pedidos. Salve nele o primeiro pedido que você usou na aula anterior.",
      check: [
        "Tenho horários fixos para estudar durante a semana.",
        "Tenho um caderno de pedidos criado.",
        "Sei trocar os [colchetes] pelas informações do meu negócio."
      ]
    }
  ]
});
