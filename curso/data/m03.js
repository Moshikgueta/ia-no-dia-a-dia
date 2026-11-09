window.CURSO = window.CURSO || [];
CURSO.push({
  id: "m03", n: 3, title: "Atendimento ao cliente", icon: "🤝",
  desc: "Você monta respostas prontas para o WhatsApp, aprende a lidar com reclamações, organiza agendamentos e pede avaliações, sem perder o seu jeito de atender.",
  lessons: [
    {
      id: "m03-a1",
      title: "Respostas prontas para o WhatsApp",
      dur: 10,
      goal: "Ao final desta aula você vai ter um kit de respostas prontas para as mensagens que mais chegam no seu WhatsApp.",
      intro: [
        "“Qual o preço?”, “Vocês entregam?”, “Que horas abre?”. Você responde as mesmas perguntas dezenas de vezes por semana. Com a IA, você escreve essas respostas uma vez, bem feitas, e depois só usa.",
        "A Carla, do salão de beleza, criou com a IA uma mensagem de saudação, uma mensagem de ausência e seis respostas rápidas no WhatsApp Business. Agora, quando alguém pergunta o preço da escova, ela digita um atalho e a resposta aparece pronta.",
        "No WhatsApp Business existem três recursos que ajudam muito: mensagem de saudação (para quem fala com você pela primeira vez ou depois de um tempo), mensagem de ausência (fora do horário) e respostas rápidas (atalhos para textos que você usa sempre)."
      ],
      steps: [
        "Olhe suas conversas da última semana e anote as 6 perguntas que mais aparecem.",
        "Abra o Claude ou o ChatGPT, cole a sua ficha do negócio e use o pedido pronto abaixo com essas perguntas.",
        "Leia cada resposta, corrija preços, horários e prazos, e deixe com o seu jeito de falar.",
        "Abra o WhatsApp Business, vá em Ferramentas comerciais (o nome pode variar com a versão) e cadastre a mensagem de saudação e a mensagem de ausência.",
        "Na mesma área, cadastre cada resposta como resposta rápida, com um atalho fácil, como /preco ou /entrega.",
        "Teste: peça para um amigo mandar uma mensagem e veja como chega."
      ],
      prompts: [
        { label: "Kit de respostas", text: "[cole a ficha do seu negócio]\n\nCrie respostas curtas para o WhatsApp do meu negócio, no meu jeito de falar:\n1. Mensagem de saudação (primeiro contato)\n2. Mensagem de ausência (fora do horário: [horário])\n3. Respostas para estas perguntas frequentes: [pergunta 1], [pergunta 2], [pergunta 3], [pergunta 4]\nCada resposta com no máximo 4 linhas, no máximo 1 emoji, e terminando com uma pergunta ou próximo passo para o cliente. Onde houver preço ou prazo, deixe [PREENCHER] para eu completar." }
      ],
      example: {
        bad: "Faz uma mensagem de boas-vindas.",
        good: "Tenho um salão de beleza no Jardim América. Faça uma mensagem de saudação para o WhatsApp Business, até 3 linhas, simpática, que diga o horário (ter. a sáb., 9h às 19h) e pergunte qual serviço a cliente procura."
      },
      tip: "Peça para a IA deixar [PREENCHER] nos preços. Assim você nunca corre o risco de mandar um valor inventado.",
      warn: "Confira todo preço, prazo e horário antes de salvar como resposta rápida. Um erro ali se repete em cada mensagem enviada.",
      exercise: "Crie e cadastre no WhatsApp Business pelo menos a mensagem de ausência e 3 respostas rápidas para as perguntas que você mais recebe.",
      check: [
        "Sei quais são as perguntas que mais chegam no meu WhatsApp.",
        "Tenho respostas prontas revisadas por mim.",
        "Sei cadastrar mensagem de saudação, de ausência e respostas rápidas."
      ]
    },
    {
      id: "m03-a2",
      title: "O cliente difícil: reclamações e atrasos",
      dur: 10,
      goal: "Ao final desta aula você vai responder reclamações e avisar atrasos com calma, firmeza e educação, usando a IA como um conselheiro de cabeça fria.",
      intro: [
        "Quando um cliente reclama, a vontade é responder na hora, e muitas vezes no calor da raiva. É aí que a IA ajuda: ela escreve a primeira versão com calma enquanto você respira.",
        "O Leandro, da pizzaria, atrasou 40 minutos numa sexta cheia. A cliente mandou mensagem irritada. Ele contou a situação para a IA, sem nome nem telefone, e pediu uma resposta que pedisse desculpas sem se humilhar e oferecesse uma solução. A cliente respondeu: “Tudo bem, acontece”.",
        "Uma boa resposta a reclamação tem quatro partes: reconhecer o problema, pedir desculpas de verdade, oferecer uma solução concreta e convidar para continuar a conversa."
      ],
      steps: [
        "Antes de responder, copie a mensagem do cliente e apague o nome e qualquer dado pessoal.",
        "Conte para a IA o que aconteceu do seu lado, com sinceridade, e o que você pode oferecer (desconto, troca, refazer o serviço).",
        "Use o pedido pronto abaixo e peça duas versões.",
        "Leia, ajuste para o seu jeito e confira se não prometeu nada que não pode cumprir.",
        "Envie e, se o caso for sério, sugira continuar por ligação."
      ],
      prompts: [
        { label: "Responder reclamação", text: "Tenho um(a) [tipo de negócio]. Um cliente mandou esta reclamação: “[cole a mensagem sem nome nem dados pessoais]”.\nO que aconteceu do meu lado: [explique com sinceridade].\nO que posso oferecer: [ex.: 10% de desconto no próximo pedido / refazer o serviço sem custo].\nEscreva 2 versões de resposta para o WhatsApp, até 6 linhas, que: reconheçam o problema, peçam desculpas sem exagero, ofereçam a solução e convidem o cliente a responder. Tom calmo e respeitoso, sem se justificar demais." },
        { label: "Avisar atraso antes", text: "Tenho um(a) [tipo de negócio]. Vou atrasar a entrega de [produto/serviço] em [tempo] por causa de [motivo]. Escreva uma mensagem curta (até 4 linhas) para avisar o cliente antes que ele pergunte, com desculpas, novo prazo e uma alternativa: [alternativa, ex.: retirar no balcão]." }
      ],
      example: {
        bad: "Responde esse cliente chato que reclamou do atraso.",
        good: "Minha marcenaria atrasou 5 dias a entrega de um armário porque o fornecedor atrasou a madeira. O cliente está irritado. Escreva uma resposta curta, com desculpas, novo prazo de entrega na sexta e oferta de montagem sem custo."
      },
      tip: "Avisar o atraso antes do cliente perguntar quase sempre evita a reclamação. Deixe o segundo pedido salvo como modelo.",
      warn: "Se a reclamação envolver dano, saúde (alergia, intoxicação) ou ameaça de processo, não resolva só com a IA: procure orientação profissional antes de responder.",
      exercise: "Pegue uma reclamação real (ou uma que você recebe muito) e crie a sua resposta-modelo com o primeiro pedido. Salve no caderno de pedidos.",
      check: [
        "Sei as 4 partes de uma boa resposta a reclamação.",
        "Sei tirar dados pessoais antes de colar a mensagem do cliente.",
        "Tenho um modelo para avisar atrasos antes do cliente reclamar."
      ]
    },
    {
      id: "m03-a3",
      title: "Perguntas frequentes do seu negócio",
      dur: 9,
      goal: "Ao final desta aula você vai ter uma lista de perguntas frequentes com respostas claras, pronta para o WhatsApp, o Instagram e o balcão.",
      intro: [
        "Perguntas frequentes são aquelas dúvidas que todo cliente tem antes de comprar: forma de pagamento, prazo, entrega, troca, como cuidar do produto. Ter isso escrito poupa tempo e passa confiança.",
        "A Beatriz, da loja de roupas, tinha sempre as mesmas dúvidas sobre troca e tamanhos. Ela pediu à IA uma lista de perguntas frequentes, preencheu com as regras dela e colocou no catálogo do WhatsApp Business e num destaque do Instagram.",
        "A IA também ajuda a lembrar perguntas que você nem imaginava, porque pensa do lado do cliente."
      ],
      steps: [
        "Peça à IA que liste as perguntas que um cliente do seu ramo costuma fazer antes de comprar.",
        "Escolha as 8 a 10 mais importantes para o seu negócio.",
        "Dê as suas regras reais (pagamento, prazo, troca, entrega) e peça as respostas.",
        "Revise cada resposta com cuidado: regra de troca e prazo são compromissos com o cliente.",
        "Publique onde o cliente vê: descrição do catálogo, destaque no Instagram, cartaz no balcão, e transforme algumas em respostas rápidas."
      ],
      prompts: [
        { label: "Descobrir as perguntas", text: "Tenho um(a) [tipo de negócio] em [cidade]. Liste as 15 perguntas mais comuns que um cliente faz antes de comprar [produto/serviço], separadas por assunto: preço e pagamento, prazo e entrega, troca e garantia, cuidados com o produto." },
        { label: "Escrever as respostas", text: "Estas são as regras do meu negócio:\n- Pagamento: [formas aceitas]\n- Prazo: [prazos]\n- Entrega: [região e taxa]\n- Troca: [regra de troca]\nCom base APENAS nessas regras, responda às perguntas abaixo em linguagem simples, até 3 linhas cada. Se alguma pergunta não puder ser respondida com essas regras, escreva [PERGUNTAR AO DONO].\nPerguntas: [cole as perguntas escolhidas]" }
      ],
      tip: "A frase “com base APENAS nessas regras” diminui muito a chance de a IA inventar uma política que você não tem.",
      warn: "Regras de troca, garantia e devolução têm a ver com o Código de Defesa do Consumidor. Se tiver dúvida sobre o que é obrigatório, confirme com um profissional ou no Procon antes de publicar.",
      exercise: "Monte a sua lista de 8 perguntas frequentes com respostas e publique pelo menos uma parte em um lugar que o cliente vê (catálogo, Instagram ou balcão).",
      check: [
        "Tenho uma lista de perguntas frequentes do meu negócio.",
        "Sei fazer a IA responder só com as minhas regras.",
        "Sei onde publicar as respostas para o cliente ver."
      ]
    },
    {
      id: "m03-a4",
      title: "Agendamentos, confirmações e lembretes",
      dur: 8,
      goal: "Ao final desta aula você vai ter mensagens prontas para confirmar horários, lembrar o cliente e lidar com remarcações e faltas.",
      intro: [
        "Cliente que esquece o horário é prejuízo: a cadeira fica vazia, o mecânico fica parado. Uma mensagem de confirmação no dia anterior diminui as faltas e organiza a sua agenda.",
        "O Diego, da oficina, criou com a IA quatro modelos: confirmação do agendamento, lembrete na véspera, remarcação e mensagem para quem faltou. Salvou como respostas rápidas e usa as etiquetas do WhatsApp Business (como “agendado” e “confirmado”) para saber quem já respondeu.",
        "A IA escreve os modelos; você preenche dia e hora e envia. Simples e sempre educado."
      ],
      steps: [
        "Liste as situações da sua agenda: novo agendamento, lembrete, remarcação, falta, encaixe.",
        "Use o pedido pronto para criar um modelo para cada situação, com espaços para dia e hora.",
        "Revise e salve cada modelo como resposta rápida no WhatsApp Business (ex.: /confirma, /lembrete).",
        "Crie etiquetas no WhatsApp Business como “Agendado”, “Confirmado” e “Faltou” para organizar as conversas.",
        "Separe 5 minutos no fim do dia para mandar os lembretes de amanhã."
      ],
      prompts: [
        { label: "Modelos de agenda", text: "Tenho um(a) [tipo de negócio, ex.: oficina mecânica]. Crie 4 mensagens curtas para o WhatsApp, até 4 linhas cada, tom simpático e profissional:\n1. Confirmação de agendamento\n2. Lembrete na véspera, pedindo para o cliente responder “OK” para confirmar\n3. Remarcação quando eu preciso mudar o horário\n4. Mensagem para quem faltou, sem bronca, oferecendo novo horário\nUse [DIA], [HORA] e [SERVIÇO] onde eu devo preencher. Política de cancelamento: [sua regra, ex.: avisar com 24h de antecedência]." }
      ],
      example: {
        bad: "Mensagem lembrando o horário.",
        good: "Sou cabeleireira. Escreva um lembrete para a véspera do horário, até 3 linhas, com [DIA] e [HORA], pedindo para a cliente responder “OK” e avisando que, se não puder vir, me avise até as 18h."
      },
      tip: "Para quem atende com hora marcada, a mensagem de “quem faltou” educada traz muitos clientes de volta. Evite tom de cobrança.",
      warn: "Não cole na IA a sua agenda com nomes e telefones dos clientes. Peça só os modelos e preencha você mesmo no WhatsApp.",
      exercise: "Crie os 4 modelos, salve como respostas rápidas e mande hoje o lembrete para os clientes de amanhã.",
      check: [
        "Tenho modelos de confirmação, lembrete, remarcação e falta.",
        "Sei salvar modelos como respostas rápidas e usar etiquetas.",
        "Sei que a agenda com dados dos clientes não vai para a IA."
      ]
    },
    {
      id: "m03-a5",
      title: "Pós-venda e pedidos de avaliação no Google",
      dur: 9,
      goal: "Ao final desta aula você vai ter mensagens de pós-venda, um pedido de avaliação no Google e respostas prontas para avaliações boas e ruins.",
      intro: [
        "O atendimento não termina quando o cliente paga. Uma mensagem dias depois perguntando se deu tudo certo faz o cliente se sentir lembrado e volta a abrir a conversa.",
        "A Simone, da confeitaria, manda no dia seguinte: “O bolo fez sucesso na festa?”. Quando a resposta é boa, ela pede uma avaliação no Perfil da Empresa no Google. Hoje, quem procura confeitaria no bairro encontra várias avaliações dela, e isso traz cliente novo.",
        "Avaliações no Google ajudam quem não conhece você a confiar. E responder a todas, boas e ruins, mostra que tem gente cuidando do negócio."
      ],
      steps: [
        "Pegue o link para pedir avaliações no seu Perfil da Empresa no Google (procure a opção de pedir avaliações no próprio perfil).",
        "Use o primeiro pedido pronto para criar a mensagem de pós-venda e o pedido de avaliação.",
        "Envie o pedido de avaliação só para quem respondeu que gostou, e sem oferecer brinde em troca de avaliação.",
        "Quando chegar uma avaliação, use o segundo pedido para escrever a resposta, sem dados pessoais do cliente.",
        "Responda às avaliações negativas com calma, em público, e convide para resolver no privado."
      ],
      prompts: [
        { label: "Pós-venda e avaliação", text: "Tenho um(a) [tipo de negócio]. Escreva 2 mensagens curtas para o WhatsApp:\n1. Pós-venda, enviada [quando, ex.: no dia seguinte], perguntando se o cliente gostou de [produto/serviço]. Até 3 linhas, tom carinhoso.\n2. Pedido de avaliação no Google para quem respondeu que gostou, explicando que ajuda um negócio pequeno do bairro. Até 4 linhas, sem pressão, com o espaço [LINK] para eu colar o link." },
        { label: "Responder avaliação", text: "Recebi esta avaliação no Google sobre minha [tipo de negócio]: “[cole a avaliação, sem o nome do cliente]” com [número] estrelas.\nEscreva uma resposta pública, até 4 linhas, educada, que agradeça, [se for negativa: reconheça o problema sem discutir e convide a conversar pelo WhatsApp] e não exponha nenhum dado do cliente." }
      ],
      tip: "Responda às avaliações em poucos dias. Até um simples “obrigado, volte sempre!” bem escrito mostra cuidado.",
      warn: "Nunca escreva avaliações falsas, nem peça para a IA criar avaliações, e não ofereça descontos em troca de estrelas. Isso fere as regras do Google e pode prejudicar o seu perfil.",
      exercise: "Crie as duas mensagens, envie o pós-venda para 3 clientes recentes e responda a pelo menos uma avaliação que esteja sem resposta no seu perfil.",
      check: [
        "Tenho uma mensagem de pós-venda pronta.",
        "Sei pedir avaliação no Google de forma honesta.",
        "Sei responder avaliações boas e ruins com a ajuda da IA."
      ]
    }
  ]
});
