window.CURSO = window.CURSO || [];
CURSO.push({
  id: "m04", n: 4, title: "Marketing e redes sociais", icon: "📣",
  desc: "Você define o jeito de falar da sua marca e passa a criar posts, legendas, roteiros de vídeo e promoções com a ajuda da IA, sem perder a sua cara.",
  lessons: [
    {
      id: "m04-a1",
      title: "O jeito de falar da sua marca",
      dur: 9,
      goal: "Ao final desta aula você vai ter um guia curto com o jeito de falar do seu negócio, para a IA escrever como você.",
      intro: [
        "Texto de IA sem orientação soa igual em todo lugar: “imperdível”, “venha conferir”, “experiência única”. O cliente percebe. O que faz a diferença é o seu jeito de falar.",
        "O Bruno tem um café pequeno e fala com os clientes de um jeito leve, com bom humor e sem exagero. Ele colou na IA cinco mensagens que ele mesmo tinha escrito e pediu: “Descreva o meu jeito de escrever”. Saiu um guia de seis linhas que hoje ele cola antes de cada pedido de post.",
        "Esse guia completa a sua ficha do negócio. Juntos, eles fazem a IA escrever como alguém da sua equipe."
      ],
      steps: [
        "Separe de 3 a 5 textos que você mesmo escreveu e gostou (mensagens, legendas antigas, recados).",
        "Use o primeiro pedido pronto para a IA descrever o seu estilo.",
        "Leia o resultado e corrija: “Não, eu não uso gíria” ou “Sim, uso bastante emoji”.",
        "Peça a lista de palavras que combinam e que não combinam com você.",
        "Salve o guia na sua ficha do negócio, na linha “Jeito de falar”, e teste pedindo uma legenda."
      ],
      prompts: [
        { label: "Descobrir meu estilo", text: "Abaixo estão textos que eu escrevi para os clientes do meu/minha [tipo de negócio]:\n[cole de 3 a 5 textos, sem dados de clientes]\n\nDescreva o meu jeito de escrever em até 6 linhas: tom, tamanho das frases, uso de emojis, como trato o cliente. Depois, liste 10 palavras ou expressões que combinam comigo e 10 que eu devo evitar." },
        { label: "Testar o estilo", text: "Usando este guia de estilo: [cole o guia], escreva uma legenda curta para o Instagram sobre [assunto, ex.: o café coado do dia]. Depois me diga quais partes do guia você usou." }
      ],
      example: {
        bad: "Faz uma legenda bonita pro meu café.",
        good: "Meu café fala com o cliente de um jeito leve e bem-humorado, frases curtas, no máximo 1 emoji, sem palavras como “imperdível” ou “experiência única”. Escreva uma legenda de até 4 linhas sobre o bolo de fubá que sai quentinho às 15h."
      },
      tip: "Releia a legenda e pergunte: “Eu falaria isso no balcão?”. Se a resposta for não, peça para a IA ajustar.",
      exercise: "Crie o guia de estilo do seu negócio com o primeiro pedido, corrija o que não for você e salve na ficha do negócio.",
      check: [
        "Tenho um guia curto com o jeito de falar do meu negócio.",
        "Sei quais palavras combinam e quais não combinam comigo.",
        "Sei usar o guia para a IA escrever do meu jeito."
      ]
    },
    {
      id: "m04-a2",
      title: "O calendário de posts do mês",
      dur: 11,
      goal: "Ao final desta aula você vai ter um calendário com os posts do próximo mês, organizado em tabela e possível de cumprir.",
      intro: [
        "A maior dificuldade de postar não é escrever: é decidir o que postar todo dia. Quando você tem um plano do mês, abre o celular já sabendo o que fazer.",
        "A Tânia, do ateliê de costura, postava só quando lembrava. Com a IA, montou um calendário de três posts por semana, alternando bastidores, peças prontas, dicas de cuidado com roupa e depoimentos. Ela grava tudo de uma vez no domingo e publica durante a semana.",
        "O segredo é ser realista: melhor 3 posts por semana durante o ano todo do que 1 por dia durante duas semanas."
      ],
      steps: [
        "Decida quantos posts por semana você consegue de verdade (2 ou 3 já está ótimo).",
        "Escolha de 3 a 4 tipos de post que se repetem: bastidores, produto, dica, cliente feliz, promoção.",
        "Use o pedido pronto com a sua ficha, o mês e as datas importantes para você.",
        "Revise a tabela: troque o que não faz sentido e confira as datas comemorativas citadas.",
        "Salve o calendário no caderno de pedidos ou copie para uma planilha e coloque lembretes no celular nos dias de postar."
      ],
      prompts: [
        { label: "Calendário do mês", text: "[cole a ficha do seu negócio]\n\nMonte um calendário de posts para o Instagram do meu negócio no mês de [mês]. Eu consigo postar [número] vezes por semana, nos dias [dias].\nAlterne estes tipos de post: [ex.: bastidores, produto em destaque, dica útil, cliente satisfeito].\nDatas importantes para mim neste mês: [ex.: aniversário da loja, feriado local].\nResponda em uma tabela com as colunas: Data · Tipo de post · Ideia em uma frase · Formato (foto, carrossel ou vídeo curto) · O que preciso fotografar ou gravar." }
      ],
      example: {
        bad: "Me dá ideias de posts.",
        good: "Tenho um ateliê de costura e consigo postar 3 vezes por semana (seg., qua. e sex.). Monte o calendário de março em tabela, alternando bastidores, peça pronta, dica de cuidado com roupa e cliente satisfeita."
      },
      tip: "Peça a coluna “O que preciso fotografar ou gravar”. Assim você produz tudo de uma vez, num dia mais calmo.",
      warn: "A IA pode errar datas comemorativas e o dia da semana de uma data. Confira no calendário antes de planejar promoção em cima delas.",
      exercise: "Monte o calendário do próximo mês, confira as datas e agende no celular o lembrete do primeiro post.",
      check: [
        "Sei quantos posts por semana consigo fazer de verdade.",
        "Tenho um calendário do mês em tabela.",
        "Sei conferir as datas que a IA sugere."
      ]
    },
    {
      id: "m04-a3",
      title: "Legendas a partir da foto do produto",
      dur: 9,
      goal: "Ao final desta aula você vai mandar a foto do produto para a IA e receber opções de legenda prontas para revisar e postar.",
      intro: [
        "Claude e ChatGPT conseguem “olhar” uma foto que você anexa e descrever o que veem. Isso ajuda muito a escrever a legenda: você tira a foto do bolo, da mesa de madeira ou do corte de cabelo e pede o texto ali mesmo.",
        "O Henrique, da marcenaria, tirou foto de uma mesa de jantar pronta, anexou na conversa e pediu três legendas. A IA notou os detalhes da madeira e o acabamento; ele só acrescentou o tipo de madeira e o prazo de produção, que a IA não tinha como saber.",
        "A IA vê a foto, mas não sabe preço, ingredientes, medidas nem material. Essas informações vêm de você."
      ],
      steps: [
        "Tire uma boa foto do produto com luz natural, perto de uma janela.",
        "Abra uma conversa nova e cole o seu guia de estilo.",
        "Toque no botão de anexar (geralmente um clipe ou um +) e escolha a foto da galeria.",
        "Use o pedido pronto abaixo, com as informações que só você sabe.",
        "Escolha uma das opções, confira as informações e poste."
      ],
      prompts: [
        { label: "Legenda pela foto", text: "Anexei a foto de [produto] do meu/minha [tipo de negócio].\nInformações reais: [ex.: preço, sabor/material, tamanho, prazo de encomenda].\nMeu jeito de falar: [cole o guia de estilo ou descreva em 1 linha].\nEscreva 3 opções de legenda para o Instagram, até 5 linhas cada: uma que conta uma história, uma direta com o preço e uma com pergunta para o público comentar. Termine cada uma com uma chamada para pedir pelo WhatsApp. Sugira até 5 hashtags do meu ramo e da minha cidade ([cidade])." }
      ],
      example: {
        bad: "Faz uma legenda pra essa foto.",
        good: "Anexei a foto do bolo de cenoura com cobertura de chocolate da minha confeitaria. Ele serve 12 fatias e custa R$ [preço]. Escreva 3 legendas curtas, tom caseiro e carinhoso, terminando com “Encomende pelo WhatsApp”."
      },
      tip: "Peça para a IA olhar a foto como cliente: “O que nessa foto chama atenção e o que poderia ficar melhor?”. Dá boas dicas para a próxima foto.",
      warn: "Confira se a legenda não descreve algo que não está na foto ou no produto (ingrediente, material, tamanho). E não envie fotos com rosto de clientes sem autorização deles.",
      exercise: "Escolha um produto ou serviço que você vai postar esta semana, tire a foto, gere as legendas e publique a melhor depois de revisar.",
      check: [
        "Sei anexar uma foto na conversa com a IA.",
        "Sei passar as informações que a IA não tem como saber.",
        "Sei revisar a legenda antes de postar."
      ]
    },
    {
      id: "m04-a4",
      title: "Roteiros de Reels e vídeos curtos",
      dur: 10,
      goal: "Ao final desta aula você vai ter um roteiro simples de vídeo curto, cena por cena, que dá para gravar com o celular em poucos minutos.",
      intro: [
        "Vídeos curtos (como os Reels do Instagram e os vídeos de status) mostram o seu trabalho de um jeito que a foto não mostra: a massa sendo aberta, a tesoura em ação, a madeira sendo lixada. Mas muita gente trava na hora de gravar porque não sabe o que mostrar.",
        "O Wellington, da pizzaria, pediu à IA um roteiro de 20 segundos sobre a pizza saindo do forno. Veio dividido em quatro cenas, com o texto para escrever na tela. Ele gravou tudo em dez minutos, antes de abrir.",
        "Um bom vídeo curto tem três partes: um começo que prende nos primeiros segundos, o meio que mostra o produto ou o processo, e o final com o convite (“peça pelo WhatsApp”)."
      ],
      steps: [
        "Escolha um momento do seu trabalho que é bonito de ver (preparo, antes e depois, embalagem).",
        "Use o pedido pronto e diga quanto tempo de vídeo você quer e se vai falar ou só usar texto na tela.",
        "Leia o roteiro e risque o que você não consegue gravar sozinho.",
        "Grave cada cena separada, com o celular em pé e boa luz.",
        "Junte as cenas no próprio aplicativo da rede social, coloque o texto na tela e revise antes de publicar."
      ],
      prompts: [
        { label: "Roteiro de vídeo curto", text: "Tenho um(a) [tipo de negócio]. Crie um roteiro de vídeo curto vertical de [15 a 30] segundos sobre [assunto, ex.: o preparo do bolo de pote].\nVou gravar sozinho(a), só com o celular, [falando para a câmera / sem falar, só com texto na tela].\nResponda em uma tabela com as colunas: Cena · O que aparece · Texto na tela ou fala · Duração.\nOs primeiros 3 segundos precisam chamar atenção. Termine com um convite para [ação, ex.: pedir pelo WhatsApp]. Depois, escreva uma legenda curta para o post." },
        { label: "10 ideias de vídeo", text: "Tenho um(a) [tipo de negócio]. Me dê 10 ideias de vídeos curtos fáceis de gravar sozinho(a) com o celular, mostrando o dia a dia do meu trabalho. Para cada ideia, uma frase de explicação e uma frase de abertura que prenda a atenção." }
      ],
      tip: "Grave um pouco mais de cada cena do que o roteiro pede. Na hora de juntar, é mais fácil cortar do que faltar imagem.",
      warn: "Não use músicas que você não tem direito de usar fora das opções do próprio aplicativo da rede social, e peça autorização antes de mostrar clientes ou funcionários no vídeo.",
      exercise: "Gere um roteiro para um vídeo de 15 a 30 segundos, grave as cenas hoje e publique depois de revisar.",
      check: [
        "Sei as 3 partes de um bom vídeo curto.",
        "Sei pedir um roteiro cena por cena para a IA.",
        "Tenho um roteiro pronto para gravar com o meu celular."
      ]
    },
    {
      id: "m04-a5",
      title: "Promoções e datas comemorativas",
      dur: 10,
      goal: "Ao final desta aula você vai planejar uma promoção para uma data importante, com regras claras e textos prontos para o WhatsApp e o Instagram.",
      intro: [
        "Dia das Mães, Dia dos Namorados, Natal, volta às aulas, aniversário da loja: datas comemorativas são ótimas para vender, mas a promoção feita às pressas pode dar prejuízo ou confusão.",
        "A Lúcia, da loja de roupas, usou a IA para planejar o Dia das Mães com três semanas de antecedência: ideia de kit presente, regras da promoção, mensagem para a lista de clientes e posts para três dias. A IA sugeriu um desconto que não fechava a conta; ela ajustou com os números dela.",
        "A IA é ótima para ideias e textos. A decisão de quanto dar de desconto é sua, com os seus custos na mão."
      ],
      steps: [
        "Escolha a data e o objetivo: vender mais de um produto, trazer cliente novo ou fazer o cliente antigo voltar.",
        "Use o primeiro pedido para gerar ideias de promoção para o seu negócio.",
        "Escolha uma ideia e faça a conta do desconto com seus custos reais, na calculadora ou com o seu contador.",
        "Use o segundo pedido para escrever as regras e os textos de divulgação.",
        "Revise as regras com cuidado (validade, quantidade, formas de pagamento) e divulgue no WhatsApp, no status e no Instagram."
      ],
      prompts: [
        { label: "Ideias de promoção", text: "Tenho um(a) [tipo de negócio] em [cidade]. Quero fazer uma ação para [data comemorativa] com o objetivo de [objetivo]. Meu público: [clientes].\nMe dê 5 ideias de promoção que não dependam só de desconto (ex.: kit, brinde, combo, serviço extra). Para cada uma, diga em 2 linhas como funciona e o que eu preciso preparar." },
        { label: "Regras e divulgação", text: "Vou fazer esta promoção: [descreva a promoção, com preço e desconto já calculados por mim].\nValidade: [datas]. Limite: [quantidade ou “enquanto durar o estoque”].\nEscreva:\n1. As regras da promoção em 4 a 6 tópicos claros\n2. Uma mensagem para os clientes no WhatsApp, até 5 linhas\n3. Uma legenda para o Instagram, até 5 linhas\n4. Um texto curto para o status, até 2 linhas\nUse o meu jeito de falar: [guia de estilo]. Não invente preços nem condições além das que eu passei." }
      ],
      tip: "Comece a planejar a promoção pelo menos duas semanas antes. Use o calendário do mês da aula anterior para marcar as datas.",
      warn: "Confira as contas do desconto com os seus custos reais e deixe as regras bem claras (validade, limite, pagamento). Promoção mal explicada vira reclamação. Para sorteios, verifique as regras legais com um profissional antes de divulgar.",
      exercise: "Escolha a próxima data importante para o seu negócio, gere as ideias, escolha uma, faça a conta com seus custos e prepare os textos de divulgação.",
      check: [
        "Sei pedir ideias de promoção que não sejam só desconto.",
        "Sei que a conta do desconto é minha, com meus custos reais.",
        "Tenho regras claras e textos prontos para divulgar."
      ]
    }
  ]
});
